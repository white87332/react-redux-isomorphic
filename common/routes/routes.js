if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Main from '../components/main/main';

let path = (process.cwd() !== "/") ? process.cwd() + "/common/routes/" : "./";

export default function createRoutes(store)
{
    return {
        childRoutes: [
        {
            path: '/',
            component: Main,
            childRoutes: [
                require(path + "layoutRoute").default(store),
                require(path + "postsRoute").default(store)
            ]
        }]
    };
}
