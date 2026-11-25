import type { IncomingMessage, ServerResponse } from "node:http";
import {
  ActivityApiError,
  getGitHubActivity,
} from "../src/lib/server/githubActivity.js";

const CACHE_CONTROL = "public, s-maxage=300, stale-while-revalidate=600";

function sendJson(res: ServerResponse, statusCode: number, body: unknown) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== "GET") {
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Allow", "GET");
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  try {
    const data = await getGitHubActivity(process.env.GITHUB_TOKEN);
    res.setHeader("Cache-Control", CACHE_CONTROL);
    return sendJson(res, 200, data);
  } catch (reason) {
    res.setHeader("Cache-Control", "no-store");
    const statusCode = reason instanceof ActivityApiError ? reason.statusCode : 502;
    const message = reason instanceof Error ? reason.message : "Could not load GitHub activity.";
    console.error("GitHub Activity API failed:", message);
    return sendJson(res, statusCode, { error: message });
  }
}
