import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import uuid from 'node-uuid';

export default function(app)
{
    let rootPath = path.resolve('public');
    app.use(compression({threshold:0}));
    app.use(express.static(rootPath));
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    // app.use(favicon(rootPath + '/favicon.ico'));
    app.disable('x-powered-by');
    app.use(session(
    {
        secret: uuid.v1(),
        resave: true,
        saveUninitialized: true
    }));

}
