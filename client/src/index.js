// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import startup from '~/startup';
import '~/index.css';
import App from '~/App';
import registerServiceWorker from '~/registerServiceWorker';

startup()
  .then(() => {
    const element = document && document.getElementById('root');
    if (element) ReactDOM.render(<App />, element);
  })
  .catch(err => {
    throw err;
  });
registerServiceWorker();
