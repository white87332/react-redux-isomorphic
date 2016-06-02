import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import promiseMiddleware from '../../../common/middleware/promiseMiddleware';
import createRoutes from '../../../common/routes/routes';
import rootReducer from '../../../common/reducers';
import fetchComponentData from '../../../common/utils/fetchComponentData';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n-server';


const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);

export default function isomorphic(app)
{
    // initialize webpack HMR
    if(process.env.NODE_ENV === 'development')
    {
    	let webpack = require('webpack');
    	const config = require('../../../webpack.development.config');
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
        const routes = createRoutes(store);

        let languageParam = req.url.split('/')[1];
        let locale = languageParam;
        const resources = i18n.getResourceBundle(locale, 'common');
        const i18nClient = { locale, resources };
        const i18nServer = i18n.cloneInstance();
        i18nServer.changeLanguage(locale);

        if(req.url.indexOf('/api') !== -1)
        {
            next();
        }
        else
        {
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
        			return res.status(404).send( 'Not found' );
        		}

                // 真正拿 data 的點是在它的 componentDidMount() 裡面。
                // 在大部份的情況，我們會需要一個 router 來控制 url 和對應 component 的關係。
                // 所以我的做法是，在每個 routing 的 leaf node (如果有巢狀 routing 的話，就是最裡面的那個) 放一個 static method fetchData(),
                // 這樣的話，在 server 我們就可以用 react-router 去 match 最後被 route 到的 component, 進而得到 data 的進入點。
                let components = renderProps.components[renderProps.components.length - 1].WrappedComponent;
                fetchComponentData( store.dispatch, components, renderProps.params)
            		.then(() => {
            			const initView = renderToString((
            				<Provider store={store}>
                                <I18nextProvider i18n={i18nServer}>
            				        <RouterContext {...renderProps} />
                                </I18nextProvider>
            				</Provider>
            			));

            			let state = JSON.stringify( store.getState() );
            			let page = renderFullPage( initView, state, i18nClient );
            			return page;
            		})
            		.then( page => res.status(200).send(page) )
            		.catch( err => res.end(err.message) );
        	});
        }
    });
}

function renderFullPage(html, initialState, i18nClient)
{
	let jsSrc = (process.env.NODE_ENV === 'development')? "/asset/js/bundle/bundle.js" : "/asset/js/bundle/bundle.min.js";
    let cssLink = (process.env.NODE_ENV === 'development')? "" : "<link rel=stylesheet type='text/css' href='./asset/css/bundle/bundle.min.css'>";
    return (
        `<!doctype html>
        <html lang="utf-8">
          <head>
        	<title>Universal Redux Example</title>
            ${cssLink}
          </head>
          <body>
            <div id="root">${html}</div>
            <script>window.$REDUX_STATE = ${JSON.stringify(initialState)}</script>
            <script>window.$i18n = ${JSON.stringify(i18nClient)}</script>
            <script src=${jsSrc}></script>
          </body>
        </html>`
    );
}
