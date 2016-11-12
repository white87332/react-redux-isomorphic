if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import isNode from 'detect-node';
import Main from '../components/main/main';

let path;
if(process.env.NODE_ENV === 'development')
{
    path = (isNode) ? process.cwd() + "/common/routes/" : "./";
}
else
{
    path = "./";
}

export default function createRoutes(store)
{
    return {
        path: "/",
        component: Main,
        childRoutes: [
        {
            getChildRoutes(partialNextState, cb)
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
        }
    };
}
