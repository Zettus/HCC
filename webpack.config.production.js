var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    require.resolve('babel-loader')
                ]
            },
            { test: /\.json$/, loader: 'json-loader'}
        ]
    },
    node: {
        setImmediate: false
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = webpackConfig;
