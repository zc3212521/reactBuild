const path = require("path")

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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]&minimize'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]&minimize',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]&minimize',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, '../node_modules/mixins-sass/src/mixins.scss'),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.xml$/,
                loader: 'xml-loader'
            }
        ]
    },
    plugins: [

    ]
}