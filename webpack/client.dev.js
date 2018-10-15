const path = require('path')
const webpack = require('webpack')

const BUILT_ASSETS_FOLDER = '/assets/'

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    'babel-polyfill',
    'react-hot-loader/patch',
    path.resolve(__dirname, '../', 'src', 'app', 'client')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.join(__dirname, '../', 'public', 'client'),
    publicPath: BUILT_ASSETS_FOLDER
  },
  module: {
    rules: [
      {
        test: /(?!.*\.test)\.(jsx|js)$/,
        exclude: [/node_modules/, /__tests__/],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
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

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false
    }),
  ]
}
