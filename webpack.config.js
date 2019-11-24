const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
mode: "production",
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

    plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: "public"
      }
    ]),
    ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
      { test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // historyApiFallback: true,
    port: 9000,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};