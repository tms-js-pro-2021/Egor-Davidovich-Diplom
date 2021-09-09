import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Order from './containers/Order';
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
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </Container>
    </Router>

  );
};

export default App;
