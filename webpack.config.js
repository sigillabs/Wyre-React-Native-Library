const webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  devtool: 'none',
  entry: {
    index: './src/WyreVerification.js',
    text: './src/InjectedText.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env', 'react'] }
        }
      },
      {
        test: /\.txt$/,
        exclude: /node_modules/,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.txt']
  },
  // mode: 'production',
  mode: 'development',
  // plugins: [
  //   new webpack.IgnorePlugin(/react/),
  //   new webpack.IgnorePlugin(/react\-native/)
  // ]
  externals: {
    react: 'commonjs react',
    'react-native': 'commonjs react-native'
  },
  target: 'node'
};
