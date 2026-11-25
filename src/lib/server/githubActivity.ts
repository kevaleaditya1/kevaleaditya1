import type {
  ActivityData,
  Contribution,
  GitHubCommit,
  GitHubEvent,
  GitHubRepo,
  GitHubUser,
} from "../githubActivityTypes";

const USERNAME = "kevaleaditya1";
const GITHUB_API = "https://api.github.com";
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

interface ContributionResponse {
  total: Record<string, number>;
  contributions: Contribution[];
}

export class ActivityApiError extends Error {
  constructor(
    message: string,
    readonly statusCode: number,
  ) {
    super(message);
  }
}

async function fetchGitHubJson<T>(
  path: string,
  token: string,
): Promise<T> {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new ActivityApiError(
        "GitHub returned 403. Check that GITHUB_TOKEN is valid and has public repository read access.",
        502,
      );
    }
    throw new ActivityApiError(
      `GitHub API request failed (${response.status}).`,
      502,
    );
  }

  return response.json() as Promise<T>;
}

async function fetchContributions(): Promise<ContributionResponse> {
  const response = await fetch(CONTRIBUTIONS_API);
  if (!response.ok) {
    throw new Error(`Contribution service returned ${response.status}.`);
  }
  return response.json() as Promise<ContributionResponse>;
}

export async function getGitHubActivity(token: string | undefined): Promise<ActivityData> {
  const githubToken = token?.trim();
  if (!githubToken) {
    throw new ActivityApiError(
      "GitHub API token is not configured. Add GITHUB_TOKEN to your Vercel environment variables.",
      503,
    );
  }

  const [user, repos, events] = await Promise.all([
    fetchGitHubJson<GitHubUser>(`/users/${USERNAME}`, githubToken),
    fetchGitHubJson<GitHubRepo[]>(`/users/${USERNAME}/repos?per_page=100&sort=updated`, githubToken),
    fetchGitHubJson<GitHubEvent[]>(`/users/${USERNAME}/events/public?per_page=100`, githubToken),
  ]);

  const seenCommitTargets = new Set<string>();
  const commitTargets = events.flatMap((event) => {
    const head = event.payload.head;
    if (event.type !== "PushEvent" || !head) return [];

    const key = `${event.repo.name}:${head}`;
    if (seenCommitTargets.has(key)) return [];
    seenCommitTargets.add(key);
    return [{ event, head }];
  }).slice(0, 5);

  const [commitResults, contributionResult] = await Promise.all([
    Promise.allSettled(
      commitTargets.map(({ event, head }) => {
        const repoPath = event.repo.name
          .split("/")
          .map(encodeURIComponent)
          .join("/");
        return fetchGitHubJson<GitHubCommit>(
          `/repos/${repoPath}/commits/${encodeURIComponent(head)}`,
          githubToken,
        );
      }),
    ),
    fetchContributions().then(
      (value) => ({ ok: true as const, value }),
      (reason: unknown) => ({ ok: false as const, reason }),
    ),
  ]);

  const contributionData = contributionResult.ok ? contributionResult.value : null;

  return {
    user,
    repos,
    events,
    commits: commitResults.flatMap((result) =>
      result.status === "fulfilled" ? [result.value] : [],
    ),
    contributions: contributionData?.contributions ?? [],
    contributionTotal: contributionData
      ? contributionData.total.lastYear ?? Object.values(contributionData.total).at(-1) ?? 0
      : 0,
    contributionError: contributionResult.ok
      ? null
      : contributionResult.reason instanceof Error
        ? contributionResult.reason.message
        : "Contribution data could not be loaded.",
    commitError: commitResults.some((result) => result.status === "rejected")
      ? "Some recent commit details could not be loaded."
      : null,
  };
}
