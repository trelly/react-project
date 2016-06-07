var webpack = require('webpack');

// nodejspath 模块
var path = require('path');

// webpack 若需要迁移文件操作，需要加载transfer-webpack-plugin 插件
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/app.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: []
};
