const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILT_ASSETS_FOLDER = '/assets/';
const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
});

module.exports = {
    name: 'client',
    target: 'web',
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
                use: extractSass.extract({
                    use: ['css-loader', 'sass-loader']
                })
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
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'], // needed to put webpack bootstrap code before chunks
            filename: '[name].js?v=[chunkhash]',
            minChunks: Infinity
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env.BROWSER': true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                screw_ie8: true,
                comments: false
            },
            sourceMap: true
        }),
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en-gb|sv|da)$/),
        new webpack.HashedModuleIdsPlugin(), // not needed for strategy to work (just good practice),
        extractSass
    ]
};
