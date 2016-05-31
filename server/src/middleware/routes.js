import "babel-polyfill";
import fs from 'fs';
import { isArray } from 'util';
import Result from '../class/result';
import path from 'path';
import multipart from 'connect-multiparty';

let apiPath = path.resolve(__dirname, "../api");
let uploadOption = {
    uploadDir: path.resolve(__dirname, "../../../uploads")
};

export default async function(app)
{
    try
    {
        await routesSet(app);
        await routeErrorSet(app);
    }
    catch (e)
    {
        console.log(e);
    }
}

function routesSet(app)
{
    return new Promise((resolve, reject) =>
    {
        fs.readdir(apiPath, (err, files) =>
        {
            for (let fileName of files)
            {
                if (fileName !== '.DS_Store')
                {
                    let apiObj = require('../api/' + fileName).default;
                    let { routes, initExec } = apiObj.init();
                    if ((initExec !== undefined && !initExec) && (isArray(routes) && routes.length > 0))
                    {
                        for (let route of routes)
                        {
                            let url = route.url.toLowerCase();
                            let method = route.method.toLowerCase();
                            if (method === 'post')
                            {
                                app[route.method.toLowerCase()](url, multipart(uploadOption), apiObj.exec);
                            }
                            else
                            {
                                app[route.method.toLowerCase()](url, apiObj.exec);
                            }
                        }
                    }
                    else if (initExec !== undefined && initExec)
                    {
                        apiObj.exec();
                    }
                }
            }
            resolve();
        });
    });
}

function routeErrorSet(app)
{
    return new Promise((resolve, reject) =>
    {
        app.get('*', function(req, res) {
            res.status(404).send('Server.js > 404 - Page Not Found');
        });

        app.use((err, req, res, next) =>{
            console.log(err);
            res.status(500).send("Server error");
        });

        resolve();
    });
}
