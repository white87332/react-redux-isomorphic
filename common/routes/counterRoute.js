if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

export default (store) => (
{
    path: 'counter',
    getComponent(nextState, cb)
    {
        require.ensure([], (require) =>
        {
            cb(null, require('../components/counter/counter').default);
        }, 'counter');
    }
});
