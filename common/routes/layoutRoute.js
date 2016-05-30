if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Layout from '../components/layout/layout';

let path = (process.cwd() !== "/") ? process.cwd() + "/common/routes/" : "./";

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
