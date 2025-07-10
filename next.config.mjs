/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/KokoaBerau" : "",
  assetPrefix: isProd ? "/KokoaBerau/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;