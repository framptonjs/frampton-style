const { resolve } = require('path');

module.exports = {

  entry: {
    'style': './dist/index.js'
  },

  output: {
    filename: '[name].js',
    path: resolve('dist/bundles'),
    library: '@frampton/style',
    libraryTarget: 'commonjs2'
  },

  externals: {
    '@frampton/core': {
      commonjs2: "@frampton/core"
    }
  },

  resolve: {
    extensions: [ '.js' ]
  }
};
