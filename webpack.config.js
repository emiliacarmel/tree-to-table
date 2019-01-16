const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  devServer: {
    open: true,
    contentBase: './',
    publicPath: '/build',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     { loader: 'sass-loader' }
      //   ],
      // }
    ],
  },
}