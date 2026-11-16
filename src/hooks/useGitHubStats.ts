import { useEffect, useRef, useState } from "react";

export interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  lastCommit: string | null; // ISO date of the most recent commit
}

const FALLBACK: GitHubStats = {
  repos: 15,
  followers: 9,
  following: 15,
  stars: 4,
  lastCommit: null,
};

async function fetchJson<T>(url: string, signal: AbortSignal): Promise<T> {
  const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" }, signal });
  if (!res.ok) throw new Error(`github api ${res.status}`);
  return res.json();
}

// Public API, no token needed. Cached between calls so a tab refocus doesn't
// hammer the 60 req/hour rate limit.
export function useGitHubStats(): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>(FALLBACK);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), 8000);

    (async () => {
      try {
        const user = await fetchJson<{
          public_repos: number;
          followers: number;
          following: number;
        }>("https://api.github.com/users/kevaleaditya1", ctrl.signal);

        const repos = await fetchJson<
          { stargazers_count: number; archived: boolean }[]
        >("https://api.github.com/users/kevaleaditya1/repos?per_page=100", ctrl.signal);

        const stars = repos
          .filter((r) => !r.archived)
          .reduce((sum, r) => sum + r.stargazers_count, 0);

        const commits = await fetchJson<{ commit: { author: { date: string } } }[]>(
          "https://api.github.com/repos/kevaleaditya1/kevaleaditya1/commits?per_page=1",
          ctrl.signal,
        );

        if (mounted.current) {
          setStats({
            repos: user.public_repos,
            followers: user.followers,
            following: user.following,
            stars,
            lastCommit: commits[0]?.commit.author.date ?? null,
          });
        }
      } catch {
        // keep the fallback — never show a broken panel
      } finally {
        window.clearTimeout(timer);
      }
    })();

    return () => {
      mounted.current = false;
      ctrl.abort();
      window.clearTimeout(timer);
    };
  }, []);

  return stats;
}

export function timeAgo(iso: string | null): string {
  if (!iso) return "just now";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}