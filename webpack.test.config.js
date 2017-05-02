const { resolve } = require('path');

module.exports = {

  entry: {
    'style.spec': './testing/tests/index.js'
  },

  output: {
    filename: '[name].js',
    path: resolve('testing/bundles'),
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: [ '.js' ]
  }
};
