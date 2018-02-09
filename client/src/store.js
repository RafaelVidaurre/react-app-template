// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '~/reducers';
import history from '~/history';

const middleware = [];
const enhancers = [];
const router = routerMiddleware(history);

middleware.push(thunk);
middleware.push(router);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ level: 'info', collapsed: true });
  middleware.push(logger);
}

enhancers.push(applyMiddleware(...middleware));

const enhancer = compose(...enhancers);
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

export default store;
