var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:
    {
        app: [
            'webpack-hot-middleware/client',
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
            exclude: /node_modules/
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
                "sass"
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=8192&name=../common/asset/img/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
    ]
};
