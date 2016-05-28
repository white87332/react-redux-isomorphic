import React from 'react';
import { Route } from 'react-router';

// async load component
const loadConmponentAsync = bundle => (location, callback) =>
{
	bundle(component => {
		callback(null, component.default);
	});
};

export default (
    <Route>
        <Route path= "/counter" getComponent={loadConmponentAsync(require('bundle?lazy&name=counter!../components/counter/counter'))} />
    </Route>
);
