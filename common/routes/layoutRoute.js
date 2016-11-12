if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import isNode from 'detect-node';
import Layout from '../components/layout/layout';

let path;
if(process.env.NODE_ENV === 'development')
{
    path = (isNode) ? process.cwd() + "/common/routes/" : "./";
}
else
{
    path = "./";
}

export default (store) =>
{
    return {
        component: Layout,
        getChildRoutes(partialNextState, cb)
        {
            require.ensure([], (require) =>
            {
                cb(null, [
                    require(path + "counterRoute").default(store)
                ]);
            }, 'layout');
        }
    };
};
