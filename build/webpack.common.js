const path = require("path")
const webpack = require("webpack")

module.exports = {
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name]_[hash].js",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader?cacheDirectory=true'
            },
            {
                test: /.js$/,
                loader: 'babel-loader?cacheDirectory=true',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            },
        ]
    },
}