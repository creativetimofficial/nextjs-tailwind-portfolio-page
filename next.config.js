/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/nextjs-tailwind-portfolio-page/",
  basePath: "/nextjs-tailwind-portfolio-page",
};

module.exports = nextConfig;
