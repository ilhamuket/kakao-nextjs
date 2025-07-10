/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // default (boleh dihapus)
  },
  // Hapus `output` dan `assetPrefix`
};

export default nextConfig;
