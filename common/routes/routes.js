if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import isNode from 'detect-node';
import Main from '../components/main/main';

let path = (isNode) ? process.cwd() + "/common/routes/" : "./";

export default function createRoutes(store)
{
    return {
        path: "/",
        component: Main,
        childRoutes: [
        {
            getChildRoutes(location, cb)
            {
                require.ensure([], (require) =>
                {
                    cb(null, [
                        require(path + "mainRoute").default(store)
                    ]);
                }, 'main');
            }
        }],
        indexRoute:
        {
            onEnter: (nextState, replace) => replace('/zh/counter')
        },
    };
}
