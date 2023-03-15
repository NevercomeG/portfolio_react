/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },

  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'cdn.jsdelivr.net',
      'www.itl.cat',
      'picsum.photos',
      's3-us-west-2.amazonaws.com',
      'i.picsum.photos',
      'weblium.com',
      'assets-global.website-files.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
