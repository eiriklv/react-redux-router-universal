import qs from 'qs';
import React from 'react';
import { Router } from 'react-router';
import createLocation from 'history/lib/createLocation';
import createHistory from 'history/lib/createHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore'
import routes from '../routes';

import createMarkup from './create-markup';

import App from '../containers/App';

export default function(req, res) {
  let history = createHistory({
    getCurrentLocation: () => createLocation(req.path, {}, undefined, 'root')
  });
  const params = qs.parse(req.query);

  /**
   * wrap everything below in an async function
   * to fetch data if needed
   */
  const initialState = {};

  const store = configureStore(initialState);

  const html = React.renderToString(
    <Provider store={store}>
      {() => <Router history={history} routes={routes()} />}
    </Provider>
  );

  const finalState = store.getState();

  res.send(createMarkup(html, finalState));
}
