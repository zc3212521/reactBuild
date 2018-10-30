const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const UglifyjsPlugin = require("uglifyjs-webpack-plugin")

const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, "../src/app.js")
    },
    devtool: 'source-map',
    plugins: [
        new UglifyjsPlugin({
            sourceMap: true
        })
    ]
})