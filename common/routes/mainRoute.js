if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import isNode from 'detect-node';

let path;
if(process.env.NODE_ENV === 'development')
{
    path = (isNode) ? process.cwd() + "/common/routes/" : "./";
}
else
{
    path = "./";
}

export default (store) => (
{
    childRoutes: [
    {
        getChildRoutes(partialNextState, cb)
        {
            let nowPath = partialNextState.location.pathname.split("/")[1];
            switch (nowPath)
            {
                case 'posts':
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(path + "postsRoute").default(store)
                        ]);
                    }, 'main');
                    break;
                default:
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(path + "layoutRoute").default(store)
                        ]);
                    }, 'main');
            }
        }
    }],
    indexRoute:
    {
        onEnter: (nextState, replace) => replace('/')
    }
});
