if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

let path = (process.cwd() !== "/") ? process.cwd() + "/common/routes/" : "./";

export default (store) => (
{
    getChildRoutes(location, cb)
    {
        require.ensure([], (require) =>
        {
            cb(null, [require(path + "counterComponent").default(store)]);
        }, 'counter');
    }
});
