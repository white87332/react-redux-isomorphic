var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry:
    {
        app: [
            path.resolve(__dirname, 'common') + '/containers/app'
        ]
    },
    output:
    {
        path: path.resolve(__dirname, 'public/asset/js/bundle/'),
        filename: 'bundle.min.js',
        chunkFilename: "chunk.[name].min.js"
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
                presets: ["es2015", "stage-0", "react"],
                plugins: ["transform-decorators-legacy"],
            }
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        },
        {
            test: /\.css|\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader",
                "css-loader!sass-loader!postcss-loader"
            )
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=8192&name=../common/asset/img/[name].[ext]'
        }]
    },
    postcss: [
        autoprefixer
    ],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }}),
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'asset/js/vendors.min.js'),
        new ExtractTextPlugin('./asset/css/bundle/bundle.min.css', { allChunks: true }),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
    ]
};
