const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnvPlugin = require('dotenv-webpack');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.ts'),
    path.resolve(__dirname, 'src/assets/scss/index.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[name][ext]',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.(svg|ico|png|webp|gif|jpg|jpeg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Modern Art Gallery',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Modern Art Gallery: Location',
      template: path.resolve(__dirname, 'src/location.html'),
      filename: 'location.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Modern Art Gallery: Design System',
      template: path.resolve(__dirname, 'src/design-system.html'),
      filename: 'design-system.html'
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, 'src/partials/footer.html'),
      location: 'footer',
      template_filename: ['index.html', 'location.html', 'design-system.html']
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css'
    }),
    new DotEnvPlugin({
      systemvars: true
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.js', '.json']
  }
};
