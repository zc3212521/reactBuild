const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")

const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, "../src/app.js")
    ],
    devtool: 'inline-source-map',
    devServer: {
        // open: true,
        // host: '0.0.0.0',
        compress: true,
        port: '8888',
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        overlay: {
            errors: true
        },
        publicPath: '/public/',
        historyApiFallback: {
            index: '/public/index.html'
        },
        proxy: {
            '/data': 'http://localhost:3333'
        },
        disableHostCheck: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})