const withCSS = require('@zeit/next-css');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = withCSS({
  webpack(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
  cssModules: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    MONGO_URL: process.env.MONGO_URL,
    NODEMAILER: process.env.NODEMAILER,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    STRIPE_DEV_SECRET: process.env.STRIPE_DEV_SECRET,
    STRIPE_DEV_CLIENT: process.env.STRIPE_DEV_CLIENT,
  },
});
