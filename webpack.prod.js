const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const common = require('./webpack.common.js');

const name = 'dist';

module.exports = merge(common, {
devtool: 'inline-cheap-module-source-map',
plugins: [
    new CleanWebpackPlugin([name]),
    new UglifyJSPlugin({
      sourceMap: true,
      parallel: true,
      cache: true
    }),
    new ZipPlugin({
      path: '../zip/',
      filename: name + '.zip'
    })
  ]
});