module.exports = {
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
                    plugins: [
                        ["@babel/plugin-proposal-decorators",  { "legacy": true }]
                    ]
                }
            }
        ]
    }
}