const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")

module.exports = {
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[hash].js",
        publicPath: '/public/'
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
                loader: 'babel-loader'
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            },
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.resolve(__dirname, "../src/index.html")
        }),
    ]
}