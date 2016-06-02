var webpack = require('webpack');

// nodejspath 模块
var path = require('path');

// webpack 若需要迁移文件操作，需要加载transfer-webpack-plugin 插件
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [{
            test: /\.(css|less)$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: ['babel-loader'], // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    plugins: []
};
