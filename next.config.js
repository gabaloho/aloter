/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // Required for static export
  },
  // Optional: Add basePath if using subdirectory
  // basePath: '/your-base-path',
}

module.exports = nextConfig