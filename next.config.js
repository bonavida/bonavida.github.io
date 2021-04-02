const path = require('path');
const withImages = require('next-images');

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = withImages({
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
  future: {
    webpack5: true,
  },
});
