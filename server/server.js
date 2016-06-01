import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'https';
import main from './src/middleware/main';
import routes from './src/middleware/routes';
import isomorphic from './src/middleware/isomorphic';
import globalSet from './src/middleware/globalSet.js';

const app = express();

main(app);
isomorphic(app);
routes(app);
globalSet();

// port
let httpPort = process.env.PORT || 3000;
let httpsPort = process.env.HTTPS_PORT || 3443;

// http
let httpServer = http.createServer(app);

// https
let pfx, pwd, httpsServer;
let pfxExists = fs.existsSync('./cert/server.pfx');
let pwExists = fs.existsSync('./cert/pw.txt');

if (pfxExists && pwExists)
{
    let options = {
        pfx: fs.readFileSync('../cert/server.pfx'),
        passphrase: fs.readFileSync('../cert/pw.txt')
    };

    httpsServer = https.createServer(options, app);
}

// http start
httpServer.listen(httpPort);
console.log('http happens on port ' + httpPort);

// https start
if(pfxExists && pwExists)
{
    httpsServer.listen(httpsPort);
    console.log('https happens on port ' + httpsPort);
}

process.on('uncaughtException', evt =>
{
	console.log( 'uncaughtException: ', evt );
});
