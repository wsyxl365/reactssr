// 服务器端 两个有差别 一个需要全部打包进去 一个不需要
//require('path');
// 浏览器端(客户端)
//require('path')
const Path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', //配置node端的代码
    mode: 'development',
    entry: './src/index.js', // 入口文件
    output: {
        filename: "bundle.js",
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()], //不会把node_modules里面的引用文件打包进去
    // 配置规则
    module: {
        rules: [
            {
                test: /\.js?$/, //检测文件的类型
                loader: 'babel-loader',
                exclude: /node_modules/,
                //额外的配置项
                options: {
                    presets: [
                        '@babel/react',
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['last 2 versions']
                            }
                        }] //env 打包的时候根据环境去做适配 兼容各种浏览器最新的2个版本
                    ],
                }
            }
        ]
    }
}