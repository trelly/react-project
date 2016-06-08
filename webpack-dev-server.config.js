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
                from: path.resolve(__dirname, 'bower_components/tinymce'),
                to: 'tinymce'
            },
            {
                from: path.resolve(__dirname, 'src/langs'),
                to: 'tinymce/langs'
            }], path.resolve(__dirname, "build/static"))
    ]
};
