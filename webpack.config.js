var webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './reactApp/app.js',
  output: {
    path: path.join(__dirname,'./build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'
            ]
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
