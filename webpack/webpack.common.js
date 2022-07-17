const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      lib: path.resolve(__dirname, '../src/lib'),
      styles: path.resolve(__dirname, '../src/styles'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      { test: /\.(?:ico|gif|png|jpe?g)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      {
        test: /\.(s[ac]ss$)/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
              },
              url: false,
            },
          },
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `$assetsPath: "assets";`,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public/assets'),
          to: path.resolve(__dirname, `../build/assets`),
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
  ],
};
