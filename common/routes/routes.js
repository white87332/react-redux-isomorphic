if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Main from '../components/main/main';

let path = (process.cwd() !== "/") ? process.cwd() + "/common/routes/" : "./";

export default function createRoutes(store)
{
    return {
        childRoutes: [
        {
            path: '/',
            component: Main,
            getChildRoutes(location, cb)
            {
                require.ensure([], (require) =>
                {
                    switch (location.pathname)
                    {
                        case '/posts':
                            cb(null, [
                                require(path + "postsRoute").default(store)
                            ]);
                            break;
                        case '/counter':
                            cb(null, [
                                require(path + "layoutRoute").default(store)
                            ]);
                            break;
                        default:
                    }
                }, 'main');
            }
        }]
    };
}
