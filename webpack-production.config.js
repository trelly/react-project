var path = require('path');
var webpack = require('webpack');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
module.exports = {
    contentBase: 'build',
    entry: {
        bundle: './src/app.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            tinymce: 'tinymce/tinymce.min',
        }
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: [
                'babel-loader'
            ],
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new TransferWebpackPlugin([{
            from: 'src/www'
        }, {
            from: 'node_modules/webuploader',
            to: 'libs/webuploader'
        }, {
            from: 'node_modules/jquery',
            to: 'libs/jquery'
        }, {
            from: 'node_modules/tinymce',
            to: 'libs/tinymce'
        }, {
            from: 'src/static/tinymce',
            to: 'libs/tinymce'
        }, {
            from: 'node_modules/bootstrap',
            to: 'libs/bootstrap'
        }, {
            from: 'src/static',
            to: 'static'
        }, {
            from: 'node_modules/normalize.css',
            to: 'static/css'
        }])
    ]
};
