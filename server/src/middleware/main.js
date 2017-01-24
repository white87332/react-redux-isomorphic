import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';
import i18nMiddleware from 'i18next-express-middleware';
import i18n from '../i18n/i18n-server';

export default function (app)
{
    const rootPath = path.resolve('public');
    app.use(compression());
    app.use(helmet());
    app.use(i18nMiddleware.handle(i18n));
    app.use(express.static(rootPath));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session(
        {
            secret: 'sessionSecret',
            resave: false,
            saveUninitialized: true,
            httpOnly: true,
            secure: false,
        }));
    app.use((req, res, next) =>
    {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        // res.header('Access-Control-Allow-Credentials', 'true');
        next();
    });

    // webpack HMR
    if (process.env.NODE_ENV === 'development')
    {
        const webpack = require('webpack');
        const config = require('../../../webpack.client.dev.config');
        const compiler = webpack(config);

        /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
        const webpackDevMiddleware = require('webpack-dev-middleware');
        const webpackHotMiddleware = require('webpack-hot-middleware');
        app.use(webpackDevMiddleware(compiler,
            {
                noInfo: true, publicPath: config.output.publicPath,
            }));
        app.use(webpackHotMiddleware(compiler));
    }
}
