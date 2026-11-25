import {
  ActivityApiError,
  getGitHubActivity,
} from "../src/lib/server/githubActivity";

interface ApiRequest {
  method?: string;
}

interface ApiResponse {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(body: unknown): void;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const data = await getGitHubActivity(process.env.GITHUB_TOKEN);
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json(data);
  } catch (reason) {
    res.setHeader("Cache-Control", "no-store");
    const statusCode = reason instanceof ActivityApiError ? reason.statusCode : 502;
    const message = reason instanceof Error ? reason.message : "Could not load GitHub activity.";
    return res.status(statusCode).json({ error: message });
  }
}
