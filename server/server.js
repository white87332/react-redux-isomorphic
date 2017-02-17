import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'spdy';
import main from './src/middleware/main';
import routes from './src/middleware/routes';
import render from './src/middleware/render';
import globalSet from './src/middleware/globalSet';

const app = express();

globalSet();
main(app);
render(app);
routes(app);

// port
const httpPort = process.env.PORT || 3000;
const httpsPort = process.env.HTTPS_PORT || 3443;

// http
http.createServer(app).listen(httpPort);

console.log(`http happens on port ${httpPort}`);

// https
if (fs.existsSync('./cert/server.pfx'))
{
    const options = {
        pfx: fs.readFileSync('../cert/server.pfx'),
        passphrase: 'password',
    };

    https.createServer(options, app).listen(httpsPort);
    console.log(`http happens on port ${httpsPort}`);
}

// mkfir logs
if (!fs.existsSync('./logs'))
{
    fs.mkdir('./logs');
}

// mkfir uploads
if (!fs.existsSync('./public/asset/uploads'))
{
    fs.mkdir('./public/asset/uploads');
}

process.on('uncaughtException', (evt) =>
{
    console.log('uncaughtException: ', evt);
});
