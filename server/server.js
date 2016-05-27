import fs from 'fs';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import routes from '../common/routes/routes';
import rootReducer from '../common/reducers';
import fetchComponentData from '../common/utils/fetchComponentData';

const finalCreateStore = applyMiddleware(thunk)(createStore);
const app = express();
app.use(express.static(path.resolve('public')));

// initialize webpack HMR
if(process.env.NODE_ENV === 'development')
{
	let webpack = require('webpack');
	const config = require('../webpack.development.config');
	const compiler = webpack(config);
	let webpackDevMiddleware = require('webpack-dev-middleware');
	let webpackHotMiddleware = require('webpack-hot-middleware');
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
}

// server rendering
app.use((req, res, next) =>
{
	const store = finalCreateStore(rootReducer);

	// react-router
	match( {routes, location: req.url}, ( error, redirectLocation, renderProps ) =>
    {
		if(error)
        {
            return res.status(500).send( error.message );
        }

        if(redirectLocation)
        {
            return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );
        }

		if(renderProps === null)
        {
			// return next('err msg: route not found'); // yield control to next middleware to handle the request
			return res.status(404).send( 'Not found' );
		}

		if(process.env.NODE_ENV === 'development')
		{
			// renderProps: contains all necessary data, e.g: routes, router, history, components...
			fetchComponentData( store.dispatch, renderProps.components, renderProps.params)
	    		.then(() => {
	    			const initView = renderToString((
	    				<Provider store={store}>
							<RouterContext {...renderProps} />
	    				</Provider>
	    			));
	    			// console.log('\ninitView:\n', initView);
	    			let state = JSON.stringify(store.getState());
	    			// console.log( '\nstate: ', state )
	    			let page = renderFullPage(initView, state);
	    			// console.log( '\npage:\n', page );
	    			return page;
	    		})
	    		.then(page => res.status(200).send(page))
	    		.catch(err => res.end(err.message));
		}
		else
		{
			const initView = renderToString((
				<Provider store={store}>
					<RouterContext {...renderProps} />
				</Provider>
			));
			let state = JSON.stringify(store.getState());
			let page = renderFullPage(initView, state);
			res.status(200).send(page);
		}
	});
});

function renderFullPage(html, initialState)
{
	let src = (process.env.NODE_ENV === 'development')? "./asset/js/bundle/bundle.js" : "./asset/js/bundle/bundle.min.js";
    return (
        `<!doctype html>
        <html lang="utf-8">
          <head>
        	<title>Universal Redux Example</title>
          </head>
          <body>
          <div id="root">${html}</div>
        	<script>window.$REDUX_STATE = ${JSON.stringify(initialState)}</script>
        	<script src=${src}></script>
          </body>
        </html>`
    );
}

// example of handling 404 pages
app.get('*', function(req, res) {
	res.status(404).send('Server.js > 404 - Page Not Found');
});

// global error catcher, need four arguments
app.use((err, req, res, next) =>
{
	console.error("Error on request %s %s", req.method, req.url);
	console.error(err.stack);
	res.status(500).send("Server error");
});

process.on('uncaughtException', evt =>
{
	console.log( 'uncaughtException: ', evt );
});

app.listen(3000, function()
{
	console.log('Listening on port 3000');
});
