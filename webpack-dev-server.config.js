var webpack = require('webpack');

// nodejspath 模块
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');

// webpack 若需要迁移文件操作，需要加载transfer-webpack-plugin 插件
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    // 入口文件
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        './src/projects/batch_ban/app.jsx'
    ],
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
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new TransferWebpackPlugin([{
            from: 'www'
        }], path.resolve(__dirname, "src/projects/batch_ban")),
        new TransferWebpackPlugin([{
            from: './',
            to: 'static'
        }], path.resolve(__dirname, "src/static"))
    ]
};