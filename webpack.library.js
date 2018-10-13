const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'none',
  entry: './src/WebViewScript.js',
  output: {
    path: __dirname + '/dist',
    filename: 'script.txt'
  },
  mode: 'production'
};
