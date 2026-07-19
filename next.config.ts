import type { NextConfig } from "next";
import path from "path";

const repoName = "permchermet";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // На GitHub Pages сайт лежит в /permchermet/
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  trailingSlash: true,
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
