import React from 'react';
import { Route } from 'react-router';
import Layout from '../components/layout/layout';
import Counter from '../components/counter/counter';
import Posts from '../components/posts/posts';

const loadConmponentAsync = bundle => (location, callback) =>
{
	bundle(component => {
		callback(null, component.default);
	});
};

export default (
    <Route component={Layout}>
        <Route path= "/counter" component={Counter} />
        <Route path= "/posts" component={Posts} />
    </Route>
);
