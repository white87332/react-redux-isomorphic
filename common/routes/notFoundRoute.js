if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

export default () => (
    {
        path: '*',
        getComponent(nextState, cb)
        {
            require.ensure([], (require) =>
            {
                cb(null, require('../components/notFound/notFound').default);
            }, 'notFound');
        }
    }
);
