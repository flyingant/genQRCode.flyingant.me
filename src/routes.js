import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './pages/App';

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
