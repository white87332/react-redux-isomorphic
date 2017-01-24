import isNode from 'detect-node';
import Main from '../components/main/main';

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

export default function createRoutes(store)
{
    return {
        component: Main,
        childRoutes: [
            {
                getChildRoutes(partialNextState, cb)
                {
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(`${path}mainRoute`).default(store)
                        ]);
                    }, 'main');
                }
            }
        ]
    };
}
