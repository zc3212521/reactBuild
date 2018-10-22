const path = require("path")
const webpack = require("webpack")
const HTMLPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, "../src/app.js")
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[hash].js",
        publicPath:  '/assert/'
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
    devServer: {
        open: true,
        host: '0.0.0.0',
        compress: true,
        port: '8888',
        contentBase: path.resolve(__dirname, '../dist'),
        // hot: true,
        overlay: {
            errors: true
        },
        publicPath: '/assert/',
        historyApiFallback: {
            index: '/assert/index.html'
        },
        proxy: {
            '/data': 'http://localhost:3333'
        },
        disableHostCheck: true,
    },

    plugins: [
        new HTMLPlugin({
            template: path.resolve(__dirname, "../src/index.html")
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
}