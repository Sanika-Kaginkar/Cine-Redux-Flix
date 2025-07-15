const webpack = require('webpack');
require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode:"development",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'netra-storybook': path.resolve(__dirname, '../nui/dist'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Use the index.html file from the root
    }),
    new webpack.DefinePlugin({
    'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY),
  }),
  ],
};