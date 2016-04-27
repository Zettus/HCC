var webpack = require('webpack');
var path = require('path');
var ExtractPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {

    debug: true,
    devtool: 'eval-source-map',
    entry: {
        bundle: './src/client'
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: 'node_modules/html-webpack-template/index.ejs',
            appMountId: 'reactContent',
            mobile: true,
            title: 'HCC',
            hash: true
        }),
        new ExtractPlugin('bundle.css'),
        new webpack.optimize.OccurenceOrderPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/build/',
        filename: '[name].js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|assets)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractPlugin.extract('style', 'css!sass!autoprefixer-loader')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },

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
