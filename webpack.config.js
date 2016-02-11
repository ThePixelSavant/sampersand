var path = require('path'),
    webpack = require("webpack");


module.exports = {
    entry: [
        'bootstrap-webpack!./bootstrap.config.js',
        './client/app.js' 
    ],
    output: {
        path: path.resolve(__dirname, "public/"),
        filename: "index.js",
        publicPath: 'public/'
    },
    clearBeforeBuild: true,
    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url-loader?&name=[path][name].[ext]&limit=100000',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.jade$/,
                loader: 'jade-loader'
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            }
        ]
    }
};