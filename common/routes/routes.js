if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Layout from '../components/layout/layout';
export default function createRoutes(store)
{
    let path = (process.cwd() !== "/" )? process.cwd()+"/common/routes/" : "./";
    return {
        path: '/',
        component: Layout,
            getChildRoutes(location, cb) { require.ensure([], (require) => {
                cb(null, [ require(path + "counterRoute").default(store)]);
            }, 'counter');
        }
    };
}
