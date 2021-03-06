import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from '../middleware/promiseMiddleware';
import rootReducer from '../reducers';

export default function configureStore(initialState = undefined)
{
	// 重要：如果有 server rendering，就直接用預先埋好的資料而不用重撈了，省一趟
    const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(promiseMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

    if (module.hot)
	{
		// Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () =>
		{
            store.replaceReducer(require('../reducers').default);
        });
    }
    return store;
}
