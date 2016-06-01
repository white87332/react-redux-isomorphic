import request from 'superagent';
import { urlPath } from '../constants/config';

export function dataGet()
{
    let url = urlPath + "/api";
    return new Promise((resolve, reject) =>
    {
        request.get(url)
            .set('Accept', 'application/json')
            .end((err, res) =>
            {
                if (err || res.status !== 200 || res.body.result !== 1)
                {
                    if(err || res.status !== 200)
                    {
                        reject(new Error(err));
                    }
                    else
                    {
                        reject(new Error(res.body.message));
                    }
                }
                else
                {
                    resolve(res.body);
                }
            });
    });
}