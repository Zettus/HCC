var webpack = require('webpack');
var path = require('path');
var production = process.env.NODE_ENV === 'production';
var ExtractPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new ExtractPlugin('bundle.css'), // <=== where should content be piped
    new webpack.optimize.CommonsChunkPlugin({
        name: 'main', // Move dependencies to our main file
        children: true, // Look for common dependencies in all children,
        minChunks: 2, // How many times a dependency must come up before being extracted
    }),
];

var webpackConfig = {
    plugins: plugins,

    debug: !production,

    devtool: production ? false : 'source-map',

    entry: './src/client',

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                loader: ExtractPlugin.extract('style', 'css!sass!autoprefixer-loader'),
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url?limit=10000',
            },
            {
                test: /\.html/,
                loader: 'html',
            },
            {
                test: /\.json/,
                loader: 'json-loader',
            }
        ],
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
