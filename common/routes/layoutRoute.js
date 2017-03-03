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
            const nowPath = partialNextState.location.pathname.split('/')[1];
            switch (nowPath)
            {
                case '':
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(`${path}indexRoute`).default(store)
                        ]);
                    }, 'index');
                    break;

                case 'counter':
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(`${path}counterRoute`).default(store)
                        ]);
                    }, 'counter');
                    break;

                case 'post':
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(`${path}postRoute`).default(store)
                        ]);
                    }, 'post');
                    break;

                default:
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(`${path}notFoundRoute`).default(store)
                        ]);
                    }, 'notFound');
            }
        }
    }
);
