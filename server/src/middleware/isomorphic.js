import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { merge } from 'lodash';
import promiseMiddleware from '../../../common/middleware/promiseMiddleware';
import createRoutes from '../../../common/routes/routes';
import rootReducer from '../../../common/reducers';
import fetchComponentData from '../../../common/utils/fetchComponentData';
import i18n from '../i18n/i18n-server';

const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);

export default function isomorphic(app)
{
    // server rendering
    app.use((req, res, next) =>
    {
        if(req.url.indexOf('/api') !== -1)
        {
            next();
        }
        else
        {
            // store & route
            const store = finalCreateStore(rootReducer);
            const routes = createRoutes(store);

            // react-router
        	match({ routes, location: req.url }, ( error, redirectLocation, renderProps ) =>
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

                // routing's leaf node put a static method fetchData(),
                // in server,  we can use react-router's match  to get component and to execute static function
                let components = renderProps.components[renderProps.components.length - 1].WrappedComponent;

                // i18next
                let locale = (req.locale.indexOf("zh") === -1 && req.locale.indexOf("cn") === -1)? "zh" : req.locale;
                if(undefined !== req.cookies.i18nextLang)
                {
                    locale = req.cookies.i18nextLang;
                }
                else
                {
                    res.cookie('i18nextLang', locale);
                }

                const resources = i18nResource(locale, components.locales);
                const i18nClient = { locale, resources };
                const i18nServer = i18n.cloneInstance();
                i18nServer.changeLanguage(locale);

                fetchComponentData(store.dispatch, components, renderProps.params)
            		.then(() => {
            			const initView = renderToString((
            				<Provider store={store}>
                                <I18nextProvider i18n={i18nServer}>
            				        <RouterContext {...renderProps} />
                                </I18nextProvider>
            				</Provider>
            			));

            			let state = store.getState();
            			let page = renderFullPage( initView, state, i18nClient );
            			return page;
            		})
            		.then((page) => {
                        res.status(200).send(page);
                    })
            		.catch((err) => {
                        res.end(err.message);
                    });
        	});
        }
    });
}

function i18nResource(locale, locales)
{
    let obj;
    for (let val of locales)
    {
        let resource = i18n.getResourceBundle(locale, val);
        obj = merge(obj, resource);
    }
    return obj;
}

function renderFullPage(html, initialState, i18nClient)
{
	let jsSrc = (process.env.NODE_ENV === 'development')? "/asset/js/bundle/bundle.js" : "/asset/js/bundle/bundle.min.js";
    let cssLink = (process.env.NODE_ENV === 'development')? "" : "<link rel=stylesheet type='text/css' href='/asset/css/bundle/bundle.min.css'>";
    return (
        `<!doctype html>
        <html lang="utf-8">
          <head>
              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <meta name="description" content="">
              <title>react-redux-isomorphic</title>
              ${cssLink}
          </head>
          <body>
            <div id="root">${html}</div>
            <script>window.$REDUX_STATE = ${serialize(JSON.stringify(initialState))}</script>
            <script>window.$i18n = ${serialize(i18nClient)}</script>
            <script src=${jsSrc}></script>
          </body>
        </html>`
    );
}
