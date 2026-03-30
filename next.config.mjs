/** @type {import('next').NextConfig} */
// Must match the repository name: https://<user>.github.io/<repo>/
// Without this, CSS/JS load from /_next/... (404) and the site looks like plain text.
const basePath = "/AI_Fast_checking_web";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: `${basePath}/`
};

export default nextConfig;
