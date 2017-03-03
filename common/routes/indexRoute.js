if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

// parameter has store
export default () => ({
    path: '/',
    getComponent(nextState, cb)
    {
        require.ensure([], (require) =>
        {
            cb(null, require('../path/index/index').default);
        }, 'index');
    }
});
