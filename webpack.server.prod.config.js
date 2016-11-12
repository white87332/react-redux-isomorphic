const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

function getExternals()
{
    const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules'));
    return nodeModules.reduce(function(ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext;
    }, {});
}

module.exports = {
    target: 'node',
    devtool: 'inline-source-map',
    entry: path.join(process.cwd(), 'server/server'),
    output: {
        path: path.join(process.cwd(), 'build'),
        filename: 'server.js',
        chunkFilename: "[name].js"
    },
    externals: getExternals(),
    node: {
        __filename: true,
        __dirname: true
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "es2015", "react", "stage-0"
                    ],
                    plugins: ["transform-decorators-legacy"]
                },
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('require("source-map-support").install();', {
            raw: true,
            entryOnly: false
        }),
        new webpack.IgnorePlugin(/\.(css|less|scss|svg|png|jpe?g|png)$/),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
