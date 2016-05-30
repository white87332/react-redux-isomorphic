import Layout from '../components/layout/layout';

let path = (process.cwd() !== "/") ? process.cwd() + "/common/routes/" : "./";

export default (store) =>
{
    return {
        childRoutes: [
        {
            component: Layout,
            childRoutes: [
                require(path + "counterRoute").default(store)
            ]
        }]
    };
};
