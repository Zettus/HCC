var webpack = require('webpack');
var path = require('path');
var ExtractPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var webpackConfig = {

    debug: false,
    devtool: false,
    entry: {
        bundle: './src/client'
    },

    plugins: [
        new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
        new HtmlWebpackPlugin({
            inject: false,
            template: 'node_modules/html-webpack-template/index.ejs',
            appMountId: 'reactContent',
            mobile: true,
            title: 'HCC'
        }),
        new ExtractPlugin('bundle.css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: true, compress: {warnings: false}}),
        new webpack.optimize.DedupePlugin(),
        new CopyWebpackPlugin([
            {from: 'assets/config/config.template.json', to: 'config'}
        ])
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/dist/',
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
    }
};

module.exports = webpackConfig;
