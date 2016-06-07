var webpack = require('webpack');

// nodejspath 模块
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');

// webpack 若需要迁移文件操作，需要加载transfer-webpack-plugin 插件
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    // 入口文件
    entry: './src/app.jsx',
    // 配置加载后缀名
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    // 产出路径
    output: {
        path: buildPath,
        filename: "app.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    plugins: [
        // 配置js压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),
        new TransferWebpackPlugin([{
            from: 'www'
        }], path.resolve(__dirname, "src/projects/batch_ban")),
        new TransferWebpackPlugin([{
            from: './',
            to: 'static'
        }], path.resolve(__dirname, "src/static"))
    ]
};