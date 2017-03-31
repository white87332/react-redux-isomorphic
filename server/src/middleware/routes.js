import 'babel-polyfill';
import fs from 'fs';
import { isArray } from 'util';
import path from 'path';

const apiPath = path.resolve(__dirname, '../api');

function routesSet(app)
{
    return new Promise((resolve) =>
    {
        fs.readdir(apiPath, (err, files) =>
        {
            if (files.length > 0)
            {
                for (const fileName of files)
                {
                    if (fileName !== '.DS_Store')
                    {
                        const apiObj = require(`../api/${fileName}`).default;
                        const { routes, initExec } = apiObj.init();
                        if ((undefined !== initExec && !initExec) && (isArray(routes) && routes.length > 0))
                        {
                            for (const route of routes)
                            {
                                app[route.method.toLowerCase()](route.url.toLowerCase(), apiObj.exec);
                            }
                        }
                        else if (undefined !== initExec && initExec)
                        {
                            apiObj.exec();
                        }
                    }
                }
            }
            resolve();
        });
    });
}

function routeErrorSet(app)
{
    return new Promise((resolve) =>
    {
        app.get('*', (req, res) =>
        {
            res.status(404).send('Server.js > 404 - Page Not Found');
        });
        app.use((err, req, res) =>
        {
            console.log(err);
            res.status(500).send('Server error');
        });
        resolve();
    });
}

export default async function (app)
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
