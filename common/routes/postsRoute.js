if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

export default () =>
(
    {
        path: 'posts',
        getComponent(nextState, cb)
        {
            require.ensure([], (require) =>
            {
                cb(null, require('../components/posts/posts').default);
            }, 'posts');
        }
    }
);
