var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry:
    {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, 'common') + '/containers/app'
        ]
    },
    output:
    {
        path: path.resolve(__dirname, 'public'),
        filename: '/asset/js/bundle/bundle.min.js',
        chunkFilename: "/asset/js/bundle/chunk.[id].min.js"
    },
    module:
    {
        rules: [
        {
            test: /\.js?$/,
            loader: 'babel',
            include: path.resolve(__dirname, 'common'),
            exclude: /node_modules/,
            query:
            {
                presets: [["es2015", { "modules": false }], "stage-0", "react"],
                plugins: ["transform-decorators-legacy"],
            }
        },
        {
            test: /\.css|\.scss$/,
            loader: ExtractTextPlugin.extract(
                {
                    fallbackLoader: 'style',
                    loader: [
                        { loader: 'css'},
                        'sass',
                        'postcss'
                    ]
                }
            )
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: 'url-loader?limit=8192&name=./asset/img/[name].[ext]'
        }]
    },
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                postcss: [ autoprefixer ]
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
           beautify: false,
           mangle: {
               screw_ie8: true,
               keep_fnames: true
           },
           compress: {
               screw_ie8: true,
               warnings: false
           },
           comments: false
       }),
        new ExtractTextPlugin({
            filename:'./asset/css/bundle/bundle.min.css',
            allChunks: false
        })
    ]
};
