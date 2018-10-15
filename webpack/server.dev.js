const path = require('path')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')

const res = p => path.resolve(__dirname, p)

const entry = res('../src/server/render.js')
const output = res('../public/server')

module.exports = {
  name: 'server',
  target: 'node',
  mode: 'development',
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: 'eval',
  entry: [entry],
  output: {
    path: output,
    filename: 'render.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /(?!.*\.test)\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'ignore-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, '../', 'src', 'app'),
      'node_modules'
    ]
  },
  plugins: [
    new WriteFilePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSWER': false
    })
  ]
}
