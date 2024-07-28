/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires*/
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {

  eslint: {
    dirs: ['.'],
  },
  images: {
    domains: ['images.unsplash.com', 'img.icons8.com', 'rickandmortyapi.com',"res.cloudinary.com","dev.to","media.dev.to","cdn.hashnode.com","source.unsplash.com","i.imgur.com"],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
 

module.exports = withMDX(nextConfig)