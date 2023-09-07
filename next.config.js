/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SPOTIFY_ID: process.env.SPOTIFY_ID,
    SPOTIFY_SECRET: process.env.SPOTIFY_SECRET,
    SPOTIFY_CB: process.env.SPOTIFY_CB,
    BACK_URI: process.env.BACK_URI
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      }
    ]
  }
}

module.exports = nextConfig
