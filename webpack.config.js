var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: {
         app: './js/main.js',
         ratefinder: './js/ratefinder.js'
     },
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: '[name].bundle.js'
     },
     module: {
        rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader'
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     mode: 'development',
     devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
      }
 };