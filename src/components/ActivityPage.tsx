import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  GitCommitHorizontal,
  GitFork,
  Github,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

const USERNAME = "kevaleaditya1";
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  archived: boolean;
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string; url: string };
  created_at: string;
  payload: {
    head?: string;
    ref?: string;
    ref_type?: string;
    action?: string;
    issue?: { title: string; html_url: string };
    pull_request?: { title: string; html_url: string };
  };
}

interface GitHubCommit {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: { date: string; name: string } | null;
  };
}

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionResponse {
  total: Record<string, number>;
  contributions: Contribution[];
}

interface ActivityData {
  user: GitHubUser;
  repos: GitHubRepo[];
  events: GitHubEvent[];
  commits: GitHubCommit[];
  contributions: Contribution[];
  contributionTotal: number;
  contributionError: string | null;
  commitError: string | null;
}

async function fetchJson<T>(url: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
    signal,
  });
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${new URL(url).hostname}.`);
  }
  return response.json() as Promise<T>;
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "An unexpected error occurred.";
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function formatRelativeDate(value: string): string {
  const days = Math.floor((Date.now() - new Date(value).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  return formatDate(value);
}

function eventDescription(event: GitHubEvent): string {
  switch (event.type) {
    case "CreateEvent":
      return `Created ${event.payload.ref_type ?? "a repository"}${event.payload.ref ? ` ${event.payload.ref}` : ""}`;
    case "PullRequestEvent":
      return `${event.payload.action ?? "Updated"} a pull request`;
    case "IssuesEvent":
      return `${event.payload.action ?? "Updated"} an issue`;
    case "WatchEvent":
      return "Starred a repository";
    case "ForkEvent":
      return "Forked a repository";
    case "ReleaseEvent":
      return "Published a release";
    case "PushEvent":
      return "Pushed commits";
    default:
      return event.type.replace(/Event$/, "").replace(/([a-z])([A-Z])/g, "$1 $2");
  }
}

function buildWeeks(contributions: Contribution[]) {
  if (!contributions.length) return [];
  const byDate = new Map(contributions.map((item) => [item.date, item]));
  const first = new Date(`${contributions[0].date}T00:00:00Z`);
  first.setUTCDate(first.getUTCDate() - first.getUTCDay());
  const last = new Date(`${contributions[contributions.length - 1].date}T00:00:00Z`);
  last.setUTCDate(last.getUTCDate() + (6 - last.getUTCDay()));

  const weeks: Array<Array<Contribution & { inRange: boolean }>> = [];
  let currentWeek: Array<Contribution & { inRange: boolean }> = [];
  for (const date = new Date(first); date <= last; date.setUTCDate(date.getUTCDate() + 1)) {
    const key = date.toISOString().slice(0, 10);
    const item = byDate.get(key);
    currentWeek.push({
      date: key,
      count: item?.count ?? 0,
      level: item?.level ?? 0,
      inRange: Boolean(item),
    });
    if (date.getUTCDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  return weeks;
}

function ActivityHeader() {
  return (
    <header className="activity-header">
      <nav className="activity-nav" aria-label="Activity page navigation">
        <a className="portfolio-wordmark" href="/" aria-label="Return to Aditya Kevale portfolio">
          <img className="wordmark-mark" src="/portfolio-avatar.png" alt="" aria-hidden="true" />
          <span>Aditya Kevale<span className="wordmark-dot">.</span></span>
        </a>
        <span className="activity-current"><Activity size={15} /> GitHub activity</span>
        <a className={buttonVariants({ variant: "glass", size: "sm" })} href="/">
          <ArrowLeft size={14} /> Portfolio
        </a>
      </nav>
    </header>
  );
}

function ContributionCalendar({
  contributions,
  total,
}: {
  contributions: Contribution[];
  total: number;
}) {
  const weeks = useMemo(() => buildWeeks(contributions), [contributions]);
  const weekTotals = weeks.map((week) => week.reduce((sum, day) => sum + day.count, 0));
  const maximumWeek = Math.max(...weekTotals, 1);
  const monthLabels = weeks.flatMap((week, index) => {
    const firstOfMonth = week.find((day) => day.date.endsWith("-01"));
    return firstOfMonth
      ? [{ index, label: new Intl.DateTimeFormat("en", { month: "short" }).format(new Date(`${firstOfMonth.date}T00:00:00Z`)) }]
      : [];
  });

  return (
    <>
      <div className="activity-panel-heading">
        <div>
          <span className="activity-eyebrow">LAST 12 MONTHS</span>
          <h2>{total.toLocaleString()} contributions</h2>
        </div>
        <span className="activity-muted">Contribution calendar</span>
      </div>
      <div className="contribution-scroll">
        <div className="contribution-calendar">
          <div className="contribution-month-row">
            {monthLabels.map((month) => (
              <span key={`${month.label}-${month.index}`} style={{ gridColumn: month.index + 1 }}>
                {month.label}
              </span>
            ))}
          </div>
          <div className="contribution-body">
            <div className="contribution-weekday-labels">
              <span>Mon</span><span>Wed</span><span>Fri</span>
            </div>
            <div className="contribution-week-grid">
              {weeks.map((week, weekIndex) => (
                <div className="contribution-week" key={weekIndex}>
                  {week.map((day) => (
                    <span
                      className={`contribution-square level-${day.level}`}
                      key={day.date}
                      title={day.inRange ? `${day.count} contributions on ${day.date}` : ""}
                      aria-label={day.inRange ? `${day.count} contributions on ${day.date}` : undefined}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="contribution-calendar-footer">
            <span>Daily public contributions from GitHub</span>
            <span className="contribution-legend">Less <i className="contribution-square level-0" /><i className="contribution-square level-1" /><i className="contribution-square level-2" /><i className="contribution-square level-3" /><i className="contribution-square level-4" /> More</span>
          </div>
        </div>
      </div>
      <div className="weekly-graph" role="img" aria-label="Weekly contribution totals over the last year">
        <div className="weekly-graph-labels"><span>Weekly activity</span><span>Peak: {maximumWeek} contributions</span></div>
        <div className="weekly-graph-bars">
          {weekTotals.map((count, index) => (
            <span
              className="weekly-graph-bar"
              key={index}
              style={{ height: `${Math.max(3, (count / maximumWeek) * 100)}%` }}
              title={`${count} contributions`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function ActivityPage() {
  const [data, setData] = useState<ActivityData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const previousTitle = document.title;
    document.title = "GitHub Activity — Aditya Kevale";
    setLoading(true);
    setError(null);
    setData(null);

    const loadActivity = async () => {
      try {
        const [user, repos, events] = await Promise.all([
          fetchJson<GitHubUser>(`https://api.github.com/users/${USERNAME}`, controller.signal),
          fetchJson<GitHubRepo[]>(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, controller.signal),
          fetchJson<GitHubEvent[]>(`https://api.github.com/users/${USERNAME}/events/public?per_page=100`, controller.signal),
        ]);

        const commitTargets = Array.from(
          new Map(
            events
              .filter((event) => event.type === "PushEvent" && event.payload.head)
              .map((event) => [`${event.repo.name}:${event.payload.head}`, event] as const)
              .filter(([key], index, entries) => entries.findIndex(([other]) => other === key) === index)
              .slice(0, 5)
              .map(([key, event]) => [key, event]),
          ).values(),
        );

        const [commitResults, contributionResult] = await Promise.all([
          Promise.allSettled(
            commitTargets.map((event) =>
              fetchJson<GitHubCommit>(
                `https://api.github.com/repos/${event.repo.name}/commits/${event.payload.head}`,
                controller.signal,
              ),
            ),
          ),
          fetchJson<ContributionResponse>(CONTRIBUTIONS_API, controller.signal).then(
            (value) => ({ ok: true as const, value }),
            (reason: unknown) => ({ ok: false as const, reason }),
          ),
        ]);

        if (controller.signal.aborted) return;

        const commits = commitResults.flatMap((result) =>
          result.status === "fulfilled" ? [result.value] : [],
        );
        const failedCommits = commitResults.some((result) => result.status === "rejected");
        const contributionData = contributionResult.ok ? contributionResult.value : null;

        setData({
          user,
          repos,
          events,
          commits,
          contributions: contributionData?.contributions ?? [],
          contributionTotal: contributionData
            ? contributionData.total.lastYear ?? Object.values(contributionData.total).at(-1) ?? 0
            : 0,
          contributionError: contributionResult.ok ? null : getErrorMessage(contributionResult.reason),
          commitError: failedCommits ? "Some recent commit details could not be loaded." : null,
        });
      } catch (reason) {
        if (!controller.signal.aborted) {
          setError(getErrorMessage(reason));
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void loadActivity();
    return () => {
      controller.abort();
      document.title = previousTitle;
    };
  }, [retry]);

  const stars = data?.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0) ?? 0;
  const forks = data?.repos.reduce((sum, repo) => sum + repo.forks_count, 0) ?? 0;
  const languages = useMemo(() => {
    if (!data) return [];
    const counts = new Map<string, number>();
    data.repos.forEach((repo) => {
      if (repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    });
    const total = [...counts.values()].reduce((sum, count) => sum + count, 0) || 1;
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([language, count]) => ({ language, count, percent: (count / total) * 100 }));
  }, [data]);
  const topRepos = useMemo(
    () => data?.repos.filter((repo) => !repo.archived).slice(0, 6) ?? [],
    [data],
  );
  const recentEvents = data?.events.slice(0, 8) ?? [];

  return (
    <div className="portfolio-root activity-root">
      <ActivityHeader />
      <main className="activity-page">
        <div className="activity-page-container">
          <section className="activity-intro">
            <div>
              <p className="portfolio-eyebrow">OPEN SOURCE / IN PUBLIC</p>
              <h1>GitHub activity<span>.</span></h1>
              <p className="activity-description">
                Contributions, commits, repositories, and the work happening across my GitHub profile.
              </p>
            </div>
            <a className={buttonVariants({ variant: "glass", size: "default" })} href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer">
              <Github size={16} /> View GitHub profile <ArrowUpRight size={14} />
            </a>
          </section>

          {loading && (
            <div className="activity-state glass-surface" role="status">
              <span className="activity-loading-indicator" />
              Loading public GitHub activity…
            </div>
          )}

          {error && (
            <div className="activity-state activity-error glass-surface" role="alert">
              <p>Couldn’t load your GitHub activity. {error}</p>
              <Button variant="glass" onClick={() => setRetry((value) => value + 1)}>Try again</Button>
            </div>
          )}

          {data && (
            <>
              <section className="activity-profile glass-surface">
                <img src={data.user.avatar_url} alt={`${data.user.login} GitHub avatar`} />
                <div className="activity-profile-copy">
                  <h2>{data.user.name ?? data.user.login}</h2>
                  <a href={data.user.html_url} target="_blank" rel="noreferrer">@{data.user.login} <ArrowUpRight size={12} /></a>
                  {data.user.bio && <p>{data.user.bio}</p>}
                  {data.user.location && <span><MapPin size={13} /> {data.user.location}</span>}
                </div>
                <div className="activity-profile-followers">
                  <span><Users size={15} /> {data.user.followers} followers</span>
                  <span>{data.user.following} following</span>
                </div>
              </section>

              <section className="activity-stat-grid" aria-label="GitHub stats">
                <article className="activity-stat glass-surface"><span>Contributions</span><strong>{data.contributionError ? "—" : data.contributionTotal.toLocaleString()}</strong><small>past 12 months</small></article>
                <article className="activity-stat glass-surface"><span>Public repositories</span><strong>{data.user.public_repos}</strong><small>public projects</small></article>
                <article className="activity-stat glass-surface"><span>Stars earned</span><strong>{stars}</strong><small>across public repos</small></article>
                <article className="activity-stat glass-surface"><span>Forks</span><strong>{forks}</strong><small>community forks</small></article>
              </section>

              <section className="activity-panel glass-surface">
                {data.contributionError ? (
                  <div className="activity-data-warning" role="status">
                    Contribution calendar unavailable: {data.contributionError}
                  </div>
                ) : (
                  <ContributionCalendar contributions={data.contributions} total={data.contributionTotal} />
                )}
              </section>

              <div className="activity-content-grid">
                <section className="activity-panel glass-surface">
                  <div className="activity-panel-heading">
                    <div><span className="activity-eyebrow">LATEST PUSH EVENTS</span><h2><GitCommitHorizontal size={19} /> Recent commits</h2></div>
                    <span className="activity-muted">From public events</span>
                  </div>
                  {data.commitError && <p className="activity-data-warning">{data.commitError}</p>}
                  {data.commits.length ? (
                    <div className="activity-commit-list">
                      {data.commits.map((commit) => {
                        const repo = commit.html_url.split("/").slice(3, 5).join("/");
                        return (
                          <a className="activity-commit-row" href={commit.html_url} target="_blank" rel="noreferrer" key={commit.sha}>
                            <span className="activity-commit-icon"><GitCommitHorizontal size={15} /></span>
                            <span className="activity-commit-copy"><strong>{commit.commit.message.split("\n")[0]}</strong><small>{repo} · {commit.commit.author?.name ?? "GitHub user"}</small></span>
                            <span className="activity-commit-date">{commit.commit.author?.date ? formatRelativeDate(commit.commit.author.date) : "date unavailable"}</span>
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="activity-empty">No recent public commit details are available.</p>
                  )}
                </section>

                <section className="activity-panel glass-surface language-panel">
                  <div className="activity-panel-heading">
                    <div><span className="activity-eyebrow">BY REPOSITORY</span><h2>Language mix</h2></div>
                  </div>
                  {languages.length ? (
                    <div className="language-chart">
                      <div className="language-chart-bar">
                        {languages.map((language, index) => (
                          <span key={language.language} className={`language-segment segment-${index}`} style={{ width: `${language.percent}%` }} title={`${language.language}: ${language.count} repos`} />
                        ))}
                      </div>
                      {languages.map((language, index) => (
                        <div className="language-chart-row" key={language.language}>
                          <span className={`language-bullet segment-${index}`} />
                          <span>{language.language}</span>
                          <small>{language.count} repos</small>
                          <strong>{Math.round(language.percent)}%</strong>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="activity-empty">No repository language data is available.</p>
                  )}
                </section>
              </div>

              <div className="activity-content-grid activity-lower-grid">
                <section className="activity-panel glass-surface">
                  <div className="activity-panel-heading">
                    <div><span className="activity-eyebrow">LATEST EVENTS</span><h2><Activity size={18} /> Activity stream</h2></div>
                    <span className="activity-muted">Recent public events</span>
                  </div>
                  <div className="activity-event-list">
                    {recentEvents.map((event) => (
                      <a className="activity-event-row" href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" key={event.id}>
                        <span className={`activity-event-dot ${event.type === "PushEvent" ? "push" : ""}`} />
                        <span className="activity-event-copy"><strong>{eventDescription(event)}</strong><small>{event.repo.name}</small></span>
                        <time>{formatRelativeDate(event.created_at)}</time>
                      </a>
                    ))}
                    {!recentEvents.length && <p className="activity-empty">No recent public events found.</p>}
                  </div>
                </section>

                <section className="activity-panel glass-surface">
                  <div className="activity-panel-heading">
                    <div><span className="activity-eyebrow">UPDATED RECENTLY</span><h2><GitFork size={17} /> Repositories</h2></div>
                    <a className="activity-panel-link" href={`https://github.com/${USERNAME}?tab=repositories`} target="_blank" rel="noreferrer">All repos <ArrowUpRight size={12} /></a>
                  </div>
                  <div className="activity-repo-list">
                    {topRepos.map((repo) => (
                      <a className="activity-repo-row" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
                        <span className="activity-repo-main"><strong>{repo.name}</strong><small>{repo.description || "No description provided."}</small></span>
                        <span className="activity-repo-meta">{repo.language && <i className={`repo-language-dot language-${repo.language.toLowerCase().replace(/[^a-z]/g, "")}`} />} {repo.language ?? "—"}</span>
                        <span className="activity-repo-meta"><Star size={13} /> {repo.stargazers_count}</span>
                      </a>
                    ))}
                    {!topRepos.length && <p className="activity-empty">No public repositories found.</p>}
                  </div>
                </section>
              </div>

              <p className="activity-data-note">
                Live profile and repository data from GitHub’s public API. The contribution calendar is provided by github-contributions-api.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
