/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
}

module.exports = {
  images: {
      domains: ['images.unsplash.com', 'images.pexels.com','cdn.jsdelivr.net','www.itl.cat']

  }

}
