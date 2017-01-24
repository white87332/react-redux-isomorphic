import isNode from 'detect-node';
import Layout from '../components/layout/layout';

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

let path;
if (process.env.NODE_ENV === 'development')
{
    path = (isNode) ? `${process.cwd()}/common/routes/` : './';
}
else
{
    path = './';
}

export default store => (
    {
        component: Layout,
        getChildRoutes(partialNextState, cb)
        {
            require.ensure([], (require) =>
            {
                cb(null, [
                    require(`${path}counterRoute`).default(store)
                ]);
            }, 'layout');
        }
    }
);
