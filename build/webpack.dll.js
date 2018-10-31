const path = require("path")
const webpack = require("webpack")

module.exports = {
    mode: 'production',
    entry: {
        vendor: [
            "react",
            "react-dom",
            "lodash",
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].dll.js",
        library: '[name]_[hash]',
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]_[hash]",
            path: path.resolve(__dirname, "../dist", 'manifest.json'),
        }),

    ]
}