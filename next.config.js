/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles Next.js deployment automatically, no need for static export
  images: {
    // Vercel supports optimized images by default
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Remove static export configurations for Vercel
};

module.exports = nextConfig;