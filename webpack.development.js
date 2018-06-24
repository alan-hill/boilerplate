 const path = require('path')
 const webpack = require('webpack')
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports = merge(common, {
   mode: "development",

   devtool: 'inline-source-map',

   // Where our bundled files should go
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: "bundle.js"
   },

   plugins: [
     new HtmlWebpackPlugin({
       template: './public/index.html'
     }),

     new webpack.HotModuleReplacementPlugin(),

     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('development')
     })
   ],

   // Tell webpack-dev-server where to look
   devServer: {
     hot: true,
     port: 3000,
     historyApiFallback: true
   }
 })
