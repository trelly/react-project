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
                from: path.resolve(__dirname, 'node_modules/tinymce'),
                to: 'tinymce'
            },
            {
                from: path.resolve(__dirname, 'src/langs'),
                to: 'tinymce/langs'
            },
            {
                from: path.resolve(__dirname, 'node_modules/bootstrap'),
                to: 'bootstrap'
            }], path.resolve(__dirname, "build/static"))
    ]
};
