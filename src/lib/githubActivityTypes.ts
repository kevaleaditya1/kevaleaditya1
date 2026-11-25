export interface GitHubUser {
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

export interface GitHubRepo {
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

export interface GitHubEvent {
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

export interface GitHubCommit {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: { date: string; name: string } | null;
  };
}

export interface Contribution {
  date: string;
  count: number;
  level: number;
}

export interface ActivityData {
  user: GitHubUser;
  repos: GitHubRepo[];
  events: GitHubEvent[];
  commits: GitHubCommit[];
  contributions: Contribution[];
  contributionTotal: number;
  contributionError: string | null;
  commitError: string | null;
}
