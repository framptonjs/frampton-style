const { resolve } = require('path');

module.exports = {

  entry: {
    'style': './dist/index.js'
  },

  output: {
    filename: '[name].js',
    path: resolve('dist/bundles'),
    library: '@frampton/style',
    libraryTarget: 'commonjs'
  },

  externals : {
    '@frampton/core': {
      commonjs: "@frampton/core"
    }
  },

  resolve: {
    extensions: [ '.js' ]
  }
};
