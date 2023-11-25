/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/nextjs-tailwind-portfolio-page/",
  basePath: "/nextjs-tailwind-portfolio-page",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
