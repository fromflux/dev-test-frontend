import React from 'react';
import { Router, Route, hashHistory, Redirect } from 'react-router';

import Bikes from './bikes/Bikes';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router history={hashHistory}>
      <Redirect from="/" to="bikes" />
      <Route path="bikes" component={Bikes} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};

export default App;