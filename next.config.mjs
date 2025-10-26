/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    runtime: 'edge',
    appDir: true,
  },
};

export default nextConfig;
