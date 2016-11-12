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
    path: ":lang",
    childRoutes: [
    {
        getChildRoutes(partialNextState, cb)
        {
            let pathname = partialNextState.location.pathname;
            let nowPath = (undefined !== partialNextState.params.lang)? pathname.split("/")[2] : pathname;
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
                case 'counter':
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(path + "layoutRoute").default(store)
                        ]);
                    }, 'main');
                    break;
                default:
                    require.ensure([], (require) =>
                    {
                        cb(null, [
                            require(path + "notFoundRoute").default(store)
                        ]);
                    }, 'notFound');
            }
        }
    }],
    indexRoute:
    {
        onEnter: (nextState, replace) => replace('/zh/counter')
    }
});
