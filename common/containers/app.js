import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import routes from '../routes/routes';

let state = (window.$REDUX_STATE)? window.$REDUX_STATE : null;
const store = configureStore(state);

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			{routes}
		</Router>
	</Provider>,
	document.getElementById('root')
);
