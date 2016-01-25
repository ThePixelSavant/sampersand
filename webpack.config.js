var path = require('path'),
    webpack = require("webpack");


module.exports = {
    entry: './client/app.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js",
        publicPath: '/dist/'
    },
    clearBeforeBuild: true,
    module: {
        loaders: [
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    }
};  