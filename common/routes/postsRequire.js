import Posts from '../components/posts/posts';

export default (store) => ({
    path: 'posts',
    component: Posts,

    getChildRoutes(location, cb)
    {
        require.ensure([], (require) =>
        {
            cb(null, [require(path + "postsRequireId").default(store)]);
        }, 'postsId');
    }
});
