/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.kindpng.com', "res.cloudinary.com", "firebasestorage.googleapis.com"],
    formats: ['image/avif', 'image/webp'],

  },
}
module.exports = nextConfig
