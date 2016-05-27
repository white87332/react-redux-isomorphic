import React from 'react';
import { Route } from 'react-router';
import Counter from '../components/counter/counter';

export default (
    <Route>
        <Route path= "/counter" component={Counter} />
    </Route>
);
