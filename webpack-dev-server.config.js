var path = require('path');
var webpack = require('webpack');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
console.log(path.resolve(__dirname, 'node_modules/tinymce'));
module.exports = {
    contentBase: 'build',
    entry: {
        bundle: './src/app.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            tinymce: 'tinymce/tinymce.min',
        }
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: [
                    'babel-loader'
                ],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new TransferWebpackPlugin([
            {
                from: path.resolve(__dirname, 'node_modules/jquery'),
                to: 'jquery'
            },
            {
                from: path.resolve(__dirname, 'node_modules/tinymce'),
                to: 'tinymce'
            },
            {
                from: path.resolve(__dirname, 'node_modules/bootstrap'),
                to: 'bootstrap'
            },
            {
                from: path.resolve(__dirname, 'node_modules/normalize.css'),
                to: 'static/css'
            },
            {
                from: path.resolve(__dirname, 'src/static/langs'),
                to: 'tinymce/langs'
            },
            {
                from: path.resolve(__dirname, 'src/static'),
                to: 'static'
            }])
    ]
};
