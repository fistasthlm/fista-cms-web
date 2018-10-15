const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const BUILT_ASSETS_FOLDER = '/assets/'

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'production',
  devtool: false,
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../', 'src', 'app', 'client')
  ],
  output: {
    filename: '[name].js?v=[chunkhash]',
    chunkFilename: '[name].js?v=[chunkhash]',
    path: path.join(__dirname, '../', 'public', 'client'),
    publicPath: BUILT_ASSETS_FOLDER
  },
  module: {
    rules: [
      {
        test: /(?!.*\.test)\.(jsx|js)$/,
        exclude: [/node_modules/, /__tests__/],
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader', 'sass-loader'
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.join(__dirname, '../', 'src', 'app'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en-gb|sv|da)$/),
    new webpack.HashedModuleIdsPlugin(), // not needed for strategy to work (just good practice),
  ]
}
