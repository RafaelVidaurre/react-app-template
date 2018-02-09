// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import history from '~/history';
import store from '~/store';
import routes from '~/routes';

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

export default App;
