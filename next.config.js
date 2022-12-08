/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    minimumCacheTTL: 60,
  },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
