var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');
var cssMqpacker = require("css-mqpacker");

module.exports = {
    entry:
    {
        app: [
            'webpack-hot-middleware/client',
            'babel-polyfill',
            path.resolve(__dirname, 'common') + '/containers/app'
        ]
    },
    output:
    {
        path: '/asset/js/bundle/',
        filename: 'bundle.js',
        publicPath: '/asset/js/bundle/',
        chunkFilename: "chunk.[name].js"
    },
    resolve:
    {
        "extensions": ["", ".js", ".jsx"]
    },
    module:
    {
        loaders: [
        {
            test: /\.js?$/,
            loader: 'babel',
            include: path.resolve(__dirname, 'common'),
            exclude: /node_modules/,
            query:
            {
                presets: ['react-hmre', "es2015", "stage-0", "react"],
                plugins: ["transform-decorators-legacy"],
            }
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        },
        {
            test: /\.css|\.scss$/,
            loaders: [
                "style",
                "css",
                "sass?outputStyle=compressed",
                "postcss"
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=8192&name=../public/asset/img/[name].[ext]'
        }]
    },
    postcss: [
        autoprefixer,
        flexibility,
        cssMqpacker
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
    ]
};
