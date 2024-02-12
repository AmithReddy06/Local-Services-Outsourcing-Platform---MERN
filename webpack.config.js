const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ... other configurations
  resolve: {
    fallback: {
      assert: require.resolve('assert'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
  plugins: [
    // Add the following plugin
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
