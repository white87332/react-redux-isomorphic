if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

// parameter has store
export default () =>
(
    {
        path: '/counter',
        getComponent(nextState, cb)
        {
            require.ensure([], (require) =>
            {
                cb(null, require('../containers/counter/counter').default);
            }, 'counter');
        }
    }
);
