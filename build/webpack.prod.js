const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const UglifyjsPlugin = require("uglifyjs-webpack-plugin")
const HTMLPlugin = require("html-webpack-plugin")

const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, "../src/app.js")
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require("../dist/manifest.json")
        }),
        new HTMLPlugin({
            template: path.resolve(__dirname, "../src/index.html")
        }),
        new UglifyjsPlugin({
            sourceMap: true,
            cache: true,
            parallel: true, // 并发执行编译，并发数默认 cpu核心-1
            uglifyOptions: {
                compress: {
                    drop_console: true, // 删除 console 语句
                }
            },
        })
    ],
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            chunks: 'all'
        }
    }
})