import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginForm from './components/LoginForm';
import Home from './containers/Home';
import Container from './components/Container';
import store from './redux/store'
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
