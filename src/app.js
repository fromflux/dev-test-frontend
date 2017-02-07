import React from 'react';
import { Router, Route, browserHistory, Redirect, IndexRedirect } from 'react-router';

import Root from './Root';
import Bikes from './bikes/Bikes';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/bikes" />
        <Route path="bikes" component={Bikes} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );
};

export default App;