const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = withImages({
  swcMinify: true,
  assetPrefix: ghPages ? '/bonavida.github.io/' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ['ts', 'tsx', 'mdx'],
      },
    ],
  ],
  nextConfig
);
