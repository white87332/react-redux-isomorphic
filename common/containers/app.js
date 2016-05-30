import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import createRoutes from '../routes/routes';

let state = (window.$REDUX_STATE)? JSON.parse(window.$REDUX_STATE) : null;
const store = configureStore(state);
const routes = createRoutes(store);

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
	render(
		<Provider store={store}>
			<Router history={browserHistory} {...renderProps} />
		</Provider>,
		document.getElementById('root')
	);
});
