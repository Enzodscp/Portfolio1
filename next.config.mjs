/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio1',
  images: {
    unoptimized: true, // Obligatoire pour l'export statique sur GitHub Pages
  },
};

export default nextConfig;