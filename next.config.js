/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "cdn.jsdelivr.net",
      "www.itl.cat",
      "picsum.photos",
      "s3-us-west-2.amazonaws.com",
      "i.picsum.photos",
      "assets-global.website-files.com",
    ],
  },
};
