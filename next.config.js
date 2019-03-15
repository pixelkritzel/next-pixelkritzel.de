const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

const config = {
  useFileSystemPublicRoutes: false,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  }
};

module.exports = withTypescript(withSass(config));
