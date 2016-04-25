var webpack = require('webpack');
var path = require('path');
var production = process.env.NODE_ENV === 'production';
var ExtractPlugin = require('extract-text-webpack-plugin');

function getPlugins() {

    var plugins = [
        new ExtractPlugin('bundle.css'), // <=== where should content be piped
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: Infinity
        })
    ];

    if (process.env.NODE_ENV === 'production') {
        plugins.push(new webpack.optimize.DedupePlugin());
        plugins.push(new webpack.optimize.UglifyJsPlugin(
            {
                mangle: true,
                compress: {
                    warnings: false
                }
            }
        ));
    }
    return plugins;
}

var webpackConfig = {

    debug: !production,

    devtool: production ? false : 'source-map',

    entry: {
        bundle: './src/client',
        vendor: ['babel-polyfill', 'lodash', 'superagent', 'react', 'react-dom', 'fluxible', 'fluxible-router', 'fluxible-action-utils', 'fluxible-addons-react']
    },

    plugins: getPlugins(),

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/build/',
        filename: '[name].js',
        publicPath: '/'
    },

    module : {
        loaders : [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader : 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractPlugin.extract('style', 'css!sass!autoprefixer-loader')
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url?limit=10000'
            },
            {
                test: /\.html/,
                loader: 'html',
            },
            {
                test: /\.json/,
                loader: 'json-loader',
            }
        ]
    },

    // module: {
    //     loaders: [
    //         {
    //             test: /\.(js|jsx)/,
    //             loader: 'babel-loader',
    //             exclude: /node_modules/,
    //         },


   
    //     ],
    // },
    devServer: {
        hot: true,
        stats: 'errors-only',
        contentBase: './assets',
        port: 3000,
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:8080/',
            rewrite: function (req) {
                req.url = req.url.replace(/^\/api(.+)$/, '$1');
            }
        }]
    }
};

module.exports = webpackConfig;
