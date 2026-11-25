import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { ActivityApiError, getGitHubActivity } from "./src/lib/server/githubActivity";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "local-github-activity-api",
        configureServer(server) {
          server.middlewares.use("/api/activity", (request, response) => {
            if (request.method !== "GET") {
              response.statusCode = 405;
              response.setHeader("Cache-Control", "no-store");
              response.setHeader("Allow", "GET");
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify({ error: "Method not allowed." }));
              return;
            }

            void getGitHubActivity(env.GITHUB_TOKEN)
              .then((data) => {
                response.statusCode = 200;
                response.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify(data));
              })
              .catch((reason: unknown) => {
                response.statusCode = reason instanceof ActivityApiError ? reason.statusCode : 502;
                response.setHeader("Cache-Control", "no-store");
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify({
                  error: reason instanceof Error ? reason.message : "Could not load GitHub activity.",
                }));
              });
          });
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
