import request from 'superagent';

export function dataGet(url)
{
    return new Promise((resolve, reject) => {
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
