const withPlugins = require('next-compose-plugins');
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({
  public: [
    'MY_API_URL',
  ],
});

const nextConfig = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module.
    config.node = { // eslint-disable-line no-param-reassign
      fs: 'empty',
    };
    return config;
  },
};

module.exports = withPlugins([
  [withConfig],
], nextConfig);
