/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portfolio1' : '',
  assetPrefix: isProd ? '/Portfolio1/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;