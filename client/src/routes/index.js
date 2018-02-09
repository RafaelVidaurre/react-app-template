// @flow
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '~/components/pages/Home';

const Routes = () => (
  <Switch>
    <Route path="/" component={() => <Home />} />
    <Route path="/page-not-found" component={() => <h1>404</h1>} />
    <Redirect push to="/page-not-found" />
  </Switch>
);

export default Routes;
