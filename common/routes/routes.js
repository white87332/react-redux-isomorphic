if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Main from '../components/main/main';
import isNode from 'detect-node';

let path = (isNode) ? process.cwd() + "/common/routes/" : "./";

export default function createRoutes(store)
{
    return {
        path: ":lang",
        component: Main,
        childRoutes: [
        {
            getChildRoutes(location, cb)
            {
                switch (location.pathname)
                {
                    case '/zh/posts':
                    case '/en/posts':
                        require.ensure([], (require) =>
                        {
                            cb(null, [
                                require(path + "postsRoute").default(store)
                            ]);
                        }, 'main');
                        break;
                    case '/zh/counter':
                    case '/en/counter':
                        require.ensure([], (require) =>
                        {
                            cb(null, [
                                require(path + "layoutRoute").default(store)
                            ]);
                        }, 'main');
                        break;
                    default:
                        require.ensure([], (require) =>
                        {
                            cb(null, [
                                require(path + "notFoundRoute").default(store)
                            ]);
                        }, 'notFound');
                }
            }
        }]
    };
}
