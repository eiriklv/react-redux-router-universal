import 'babel-core/polyfill';
import React from 'react';
import { Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../containers/App';
import configureStore from '../store/configureStore';
import routes from '../routes';
import { createHistory } from 'history';

const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

const rootElement = document.getElementById('app');

React.render(
  <Provider store={store}>
    {() => <Router history={createHistory()} routes={routes()} />}
  </Provider>,
  rootElement
);
