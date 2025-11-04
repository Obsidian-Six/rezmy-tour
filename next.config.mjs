/** @type {import('next').NextConfig} */
const nextConfig = {
  // productionBrowserSourceMaps: false, // Prevents .map files from being generated in production
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
