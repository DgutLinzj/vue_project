/*使用插件html-webpack-plugin只需在当前目录运行 webpack，不用再手动引入build.js脚本了 */

// path是node中的内置模块
var path = require("path");

// 可自动把构建好的js脚本引入到html中
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 配置打包的入口文件,就是要打包谁
    entry: "./src/js/main.js",
    // 配置打包后的输出路径   __dirname绝对路径下的当前目录
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "build.js"
    },
    // 该配置项专门用来添加各种插件的
    plugins: [
        // 配置html的自动脚本注入
        new htmlWebpackPlugin({
            template: "./src/index.html",// 原html
            filename: "index.html",// 注入后的html
            inject: "body" // 脚本注入到页面的body中
        })
    ],
    module: {
        // 该配置项专门用来扩展webpack能够打包的文件类型的
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]   
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]   
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]   
            },
            {
                test: /\.tpl$/,
                use: [
                    "html-loader"
                ]   
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {loader: "url-loader",options: {limit: 5000}},
                    "image-webpack-loader"
                ]   
            },
            // 配置vue文件的解析转换
            {
                test: /\.vue$/,
                use: [
                    "vue-loader"
                ]
            }
        ]
    }
};