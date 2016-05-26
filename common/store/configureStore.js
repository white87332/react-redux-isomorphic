import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from '../reducers';

// toggle redux-devtool panel
window.$REDUX_DEVTOOL = false;

const enhancer = compose(
	applyMiddleware(thunk)
);

export default function configureStore(initialState = undefined)
{
	// 重要：如果有 server rendering，就直接用預先埋好的資料而不用重撈了，省一趟
	const store = createStore(combinedReducers, initialState, enhancer);

	// module 是 webpack 包過一層時提供的，signature 如下：
	// function(module, exports, __webpack_require__) {
	if (module.hot)
	{
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () =>
		{
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
