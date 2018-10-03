var webpack = require('webpack');
const path = require('path');

const fs = require('fs');
/*
* tutorial and tips by Geoff Miller
https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f
*/
const lessToJs = require('less-vars-to-js');
const lessPath = path.join(__dirname,'./reactApp/styles/ant-default-vars.less');
const themeVars = lessToJs(fs.readFileSync(lessPath, 'utf8'));

module.exports = {
  mode: 'development',
  entry: './reactApp/app.js',
  output: {
    path: path.join(__dirname,'./build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'
            ],
            plugins: [
              ['import', {libraryName: "antd", style: true}]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "less-loader",
            options: {
              modifyVars: themeVars,
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
