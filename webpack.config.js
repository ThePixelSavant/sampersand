var path = require('path'),
    webpack = require("webpack");


module.exports = {
    entry: './client/app.js',
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "index.js",
        contentBase: '/public',
        publicPath: 'public'
    },
    clearBeforeBuild: true,
    module: {
        loaders: [
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            { test: /\.css/, loader: 'style-loader!css-loader' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
                'url-loader?&name=[path][name].[ext]&limit=100000',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            { test: /\.jade$/, loader: 'jade-loader' },
            { test: /\.hbs$/, loader: 'handlebars-loader' }
        ]
    }
};  