// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import LoginForm from './LoginForm';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route>
          404 not found <Link to="/login"></Link>{' '}
        </Route>
      </Switch>
    </Router>
  );
}
