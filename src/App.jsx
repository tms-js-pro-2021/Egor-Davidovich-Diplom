import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './containers/Home';
import Container from './components/Container';
import './App.css';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
