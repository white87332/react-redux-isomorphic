import fs from 'fs';
import { isArray } from 'util';
import Result from '../class/result';
import path from 'path';
import multipart from 'connect-multiparty';
import async from 'async';

let apiPath = path.resolve(__dirname, "../api");
let uploadOption = {
    uploadDir: path.resolve(__dirname, "../../../uploads")
};

export default function(app)
{
    async.series(
        [
            function(callback)
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

                    callback();
                });
            }
        ],
        function(err, results)
        {
            app.get('*', function(req, res) {
                res.status(404).send('Server.js > 404 - Page Not Found');
            });

            app.use((err, req, res, next) =>{
                res.status(500).send("Server error");
            });
        });
}


// export default function routes(app)
// {
//     (async (app) => {
//         await pathSet(app);
//         await errorSet(app);
//     })();
// }
//
//
// function pathSet(app)
// {
//     return new Promise((resolve, reject) => {
//         fs.readdir('./api', (err, files) =>
//         {
//             for (let fileName of files)
//             {
//                 if (fileName !== '.DS_Store')
//                 {
//                     let apiObj = require('../api/' + fileName).default;
//                     let { routes, initExec } = apiObj.init();
//                     if ((initExec !== undefined && !initExec) && (isArray(routes) && routes.length > 0))
//                     {
//                         for (let route of routes)
//                         {
//                             let url = route.url.toLowerCase();
//                             let method = route.method.toLowerCase();
//                             if (method === 'post')
//                             {
//                                 app[route.method.toLowerCase()](url, multipart(uploadOption), apiObj.exec);
//                             }
//                             else
//                             {
//                                 app[route.method.toLowerCase()](url, apiObj.exec);
//                             }
//                         }
//                     }
//                     else if (initExec !== undefined && initExec)
//                     {
//                         apiObj.exec();
//                     }
//                 }
//             }
//             resolve(null);
//         });
//     });
// }
//
// function errorSet(app)
// {
//     return new Promise((resolve, reject) => {
//         app.get('*', function(req, res) {
//             res.status(404).send('Server.js > 404 - Page Not Found');
//         });
//
//         app.use((err, req, res, next) =>
//         {
//             res.status(500).send("Server error");
//         });
//         resolve(null);
//     });
// }
