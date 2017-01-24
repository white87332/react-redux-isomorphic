const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

function getExternals()
{
    const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules'));
    return nodeModules.reduce((ext, mod) =>
    {
        ext[mod] = `commonjs${mod}`;
        return ext;
    }, {});
}

module.exports = {
    target: 'node',
    entry: path.join(process.cwd(), 'server/server'),
    output: {
        path: path.join(process.cwd(), 'build'),
        filename: 'server.js',
        chunkFilename: '[id].js'
    },
    externals: getExternals(),
    node: {
        __filename: true,
        __dirname: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
                },
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less|scss|svg|png|jpe?g|png)$/),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
};
