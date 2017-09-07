const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  favicon: 'app/assets/images/favicon.ico',
  inject: 'body',
  chunks: ['common', 'index'],
});
const TeamHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/team.html',
  filename: 'team.html',
  favicon: 'app/assets/images/favicon.ico',
  inject: 'body',
  chunks: ['common', 'team'],
});

let sourceMap = 'eval-source-map';

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === 'production') {
  sourceMap = 'source-map';
}

module.exports = {
  entry: {
    index: ['babel-polyfill', './app/pages/home/index.js'],
    team: ['babel-polyfill', './app/pages/team/team.js'],
    common: ['babel-polyfill', './app/lib/common.js'],
  },
  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules'),
    ],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
    },
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  devtool: sourceMap,
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.handlebars$/,
        use: [{
          loader: 'handlebars-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              },
            },
          }, {
            loader: 'less-loader', // compiles LESS to CSS
          },
        ],
      },
      {
        test: /\.svg/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.png/,
        use: [{
          loader: 'file-loader',
        }],
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    TeamHtmlWebpackPluginConfig,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
