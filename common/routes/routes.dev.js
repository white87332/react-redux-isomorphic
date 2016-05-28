import React from 'react';
import { Route } from 'react-router';
import Layout from '../components/layout/layout';
import Counter from '../components/counter/counter';

export default (
    <Route component={Layout}>
        <Route path= "/counter" component={Counter} />
    </Route>
);
