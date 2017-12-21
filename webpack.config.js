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
const RoboticsHtmlConfig = new HtmlWebpackPlugin({
  template: './app/robotics.html',
  filename: 'robotics.html',
  favicon: 'app/assets/images/favicon.ico',
  inject: 'body',
  chunks: ['common', 'robotics'],
});
const RoboticsAboutHtmlConfig = new HtmlWebpackPlugin({
  template: './app/robotics/about.html',
  filename: 'robotics/about.html',
  favicon: 'app/assets/images/favicon.ico',
  inject: 'body',
  chunks: ['common', 'roboticsAbout'],
});
const ComputerScienceHtmlConfig = new HtmlWebpackPlugin({
  template: './app/computerscience.html',
  filename: 'computerscience.html',
  favicon: 'app/assets/images/favicon.ico',
  inject: 'body',
  chunks: ['common', 'computerscience'],
});
const OutreachHtmlConfig = new HtmlWebpackPlugin({
  template: './app/outreach.html',
  filename: 'outreach.html',
  favicon: 'app/assets/images/favicon.ico',
  inject: 'body',
  chunks: ['common', 'outreach'],
});
const HostedEventsHtmlConfig = new HtmlWebpackPlugin({
  template: './app/hostedevents.html',
  filename: 'hostedevents.html',
  favicon: 'app/assets/images/favicon.ico',
  inject: 'body',
  chunks: ['common', 'hostedevents'],
});

let sourceMap = 'eval-source-map';

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === 'production') {
  sourceMap = 'source-map';
}

module.exports = {
  entry: {
    index: ['babel-polyfill', './app/js/index.js'],
    robotics: ['babel-polyfill', './app/js/robotics.js'],
    roboticsAbout: ['babel-polyfill', './app/robotics/js/about.js'],
    common: ['babel-polyfill', './app/lib/common.js'],
    outreach: ['babel-polyfill', './app/js/outreach.js'],
    hostedevents: ['babel-polyfill', './app/js/hostedevents.js'],
    computerscience: ['babel-polyfill', './app/js/computerscience.js']
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
      }
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    RoboticsHtmlConfig,
    RoboticsAboutHtmlConfig,
    OutreachHtmlConfig,
    HostedEventsHtmlConfig,
    ComputerScienceHtmlConfig,
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
