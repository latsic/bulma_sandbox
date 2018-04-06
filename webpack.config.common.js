const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
      app: './src/app.js',
      //print: './src/js/print.js',
      //bulma: './src/js/bulma.js',
      //bulma_page: './src/js/bulma_page.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
  },
  plugins: [
    new CopyWebpackPlugin([
        {
          from: 'src/images',
          to: 'images',
        }
      ], {}),
      new HtmlWebpackPlugin({
        template : './src/html/bulma_sandbox.html',
        filename: 'bulma_sandbox.html'
      }),
      new CleanWebpackPlugin(['dist']),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      //new webpack.optimize.SplitChunksPlugin ({
      //})
  ]
};