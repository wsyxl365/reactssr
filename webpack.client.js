// 服务器端 两个有差别 一个需要全部打包进去 一个不需要
//require('path');
// 浏览器端(客户端)
//require('path')
const Path = require('path');
//const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require("./webpack.base");

const clientConfig = {
    mode: 'development',
    entry: './src/client/home/index.js', // 入口文件
    output: {
        filename: "index.js",
        path: Path.resolve(__dirname, 'public')
    },
};

module.exports = merge(config, clientConfig);