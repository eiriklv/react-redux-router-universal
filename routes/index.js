import React from 'react';
import { Route } from 'react-router';

import App from '../containers/App'
import InboxHandler from '../containers/InboxHandler';
import NoteHandler from '../containers/NoteHandler';
import NotFound from '../components/NotFound';

const routes = (() =>
  <Route path="/" component={App}>
    <Route path="/inbox" component={InboxHandler} />
    <Route path="/note/:id" component={NoteHandler} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
