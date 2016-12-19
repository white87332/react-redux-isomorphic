import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'spdy';
import main from './src/middleware/main';
import routes from './src/middleware/routes';
import isomorphic from './src/middleware/isomorphic';
import globalSet from './src/middleware/globalSet.js';

const app = express();

globalSet();
main(app);
isomorphic(app);
routes(app);

// port
let httpPort = process.env.PORT || 3000;
let httpsPort = process.env.HTTPS_PORT || 3443;

// http
http.createServer(app).listen(httpPort);
console.log('http happens on port ' + httpPort);

// https
if(fs.existsSync('./cert/server.pfx'))
{
    let options = {
        pfx: fs.readFileSync('../cert/server.pfx'),
        passphrase: ''
    };

    https.createServer(options, app).listen(httpsPort);
    console.log('https happens on port ' + httpsPort);
}

// mkfir logs
if(!fs.existsSync('./logs'))
{
    fs.mkdir('./logs', (err) => {
        if(err === null)
        {
            console.log("mkdir logs");
        }
    });
}

// mkfir uploads
if(!fs.existsSync('./uploads'))
{
    fs.mkdir('./uploads', (err) => {
        if(err === null)
        {
            console.log("mkdir uploads");
        }
    });
}

process.on('uncaughtException', evt =>
{
	console.log( 'uncaughtException: ', evt );
});
