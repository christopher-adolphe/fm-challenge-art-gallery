const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer']
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/assets/images/*',
            to: 'assets/images/[name][ext]'
          },
          {
            from: 'src/assets/images/home/desktop/*',
            to: 'assets/images/home/desktop/[name][ext]'
          },
          {
            from: 'src/assets/images/home/mobile/*',
            to: 'assets/images/home/mobile/[name][ext]'
          },
          {
            from: 'src/assets/images/home/tablet/*',
            to: 'assets/images/home/tablet/[name][ext]'
          },
          {
            from: 'src/assets/images/location/*',
            to: 'assets/images/location/[name][ext]'
          },
          {
            from: 'src/assets/images/location/desktop/*',
            to: 'assets/images/location/desktop/[name][ext]'
          },
          {
            from: 'src/assets/images/location/mobile/*',
            to: 'assets/images/location/mobile/[name][ext]'
          },
          {
            from: 'src/assets/images/location/tablet/*',
            to: 'assets/images/location/tablet/[name][ext]'
          },
          {
            from: 'src/assets/images/shared/*',
            to: 'assets/images/shared/[name][ext]'
          },
          {
            from: 'src/assets/fonts/*',
            to: 'assets/fonts/[name][ext]'
          }
        ]
      })
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }
});
