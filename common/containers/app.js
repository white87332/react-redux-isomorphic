import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import createRoutes from '../routes/routes';
import { I18nextProvider } from 'react-i18next';
import i18nClient from '../i18n/i18n-client';

if (process.env.NODE_ENV !== 'production')
{
 	window.Perf = require('react-addons-perf');
}

let state = JSON.parse(window.$REDUX_STATE);
let i18n = window.$i18n;

const store = configureStore(state);
const routes = createRoutes(store);

i18nClient.changeLanguage(i18n.locale);
i18nClient.addResourceBundle(i18n.locale, 'common', i18n.resources, true);

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
	render(
		<Provider store={store}>
			<I18nextProvider i18n={i18nClient}>
				<Router history={browserHistory} {...renderProps} />
			</I18nextProvider>
		</Provider>,
		document.getElementById('root')
	);
});
