const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ArchivePlugin = require('webpack-archive-plugin');
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
    new ArchivePlugin({
      output: './zip/'+name,
      format: 'zip'
    })
  ]
});