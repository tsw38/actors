const path                    = require('path');
const webpack                 = require('webpack');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
const dotenv                  = require('dotenv');
const dotenv_webpack          = require('dotenv-webpack');

dotenv.config();

var aliases = {
  'shared': path.resolve(     __dirname, 'src/shared'),
  'contants': path.resolve(   __dirname, 'src/contants'),
  'utils': path.resolve(      __dirname, 'src/shared/utils'),
  'views': path.resolve(      __dirname, 'src/shared/views'),
  'actions': path.resolve(    __dirname, 'src/shared/actions'),
  'context': path.resolve(    __dirname, 'src/shared/context'),
  'components': path.resolve( __dirname, 'src/shared/components')
};

// console.log('this is the origin', process.env);
module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: './src/client/renderer.js',
    output: {
      path: path.join(__dirname, `build/${process.env.VERSION_NUMBER}/client/`),
      filename: 'bundle.js',
      publicPath: '/build/',
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        //run all javascript through babel loader
        {
          test: /\.jsx?$/,
          exclude: /(node_modules\/)/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      alias: aliases
    },
    optimization: {
      minimize: false,
      minimizer: [
        new UglifyJsPlugin({
          test: /\.jsx?$/i,
          exclude: /(node_modules\/)/,
          sourceMap: true,
          uglifyOptions: {
            ecma: 6,
            warnings: true,
            compress: false,
            topLevel: true,
            ie8: false,
          }
        })
      ]
    },
    plugins: [
      new dotenv_webpack(),
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
  },
  {
    name: 'server',
    target: 'node',
    entry: [
      'babel-polyfill',
      './src/server/server.js',
    ],
    output: {
      path: path.join(__dirname, `build/${process.env.VERSION_NUMBER}/server/`),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/build/',
    },
    resolve: {
      alias: aliases
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules\/)/,
          loader: 'babel-loader'
        }
      ],
    },
    plugins: [
    ]
  }
];
