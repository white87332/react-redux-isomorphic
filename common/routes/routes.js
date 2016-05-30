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
                switch (location.pathname)
                {
                    case '/counter':
                        require.ensure([], (require) =>
                        {
                            cb(null, [require(path + "layoutRoute").default(store)]);
                        }, 'layout');
                        break;
                    case '/posts':
                        require.ensure([], (require) =>
                        {
                            cb(null, [require(path + "postsRoute").default(store)]);
                        }, 'posts');
                        break;
                    default:
                }
            }
        }]
    };
}
