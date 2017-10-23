const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server'
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    stats: 'minimal',
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});