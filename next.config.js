const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

export const assetPrefix = ghPages ? '/bonavida.github.io/' : '';
