import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home';
import Order from './containers/Order';
import Container from './components/Container';
import './App.css'



const App = () => {
  return (
    <>
      <Container>
        <Router>
          <Switch>
            <Route path="/login">
              <Home />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route>
              404 not found <Link to="/login"></Link>{' '}
            </Route>
          </Switch>
        </Router>
      </Container>
    </>

  );
}



export default App;