// 服务器端 两个有差别 一个需要全部打包进去 一个不需要
//require('path');
// 浏览器端(客户端)
//require('path')
const Path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require("./webpack.base");


const serverConfig = {
    target: 'node', //配置node端的代码
    mode: 'development',
    entry: './src/server/index.js', // 入口文件
    output: {
        filename: "bundle.js",
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()], //不会把node_modules里面的引用文件打包进去
};

module.exports = merge(config, serverConfig);