/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY || "";
const repoName = repository.includes("/") ? repository.split("/")[1] : "";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath =
  configuredBasePath || (isGithubActions && repoName ? `/${repoName}` : "");
const distDir = process.env.NEXT_DIST_DIR || ".next";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  distDir,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

export default nextConfig;
