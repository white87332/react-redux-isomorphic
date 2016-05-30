if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import isNode from 'detect-node';
import Layout from '../components/layout/layout';

let path = (isNode) ? process.cwd() + "/common/routes/" : "./";

export default (store) =>
{
    return {
        component: Layout,
        getChildRoutes(location, cb)
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
