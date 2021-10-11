import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import LoginForm from './components/LoginForm'
import Home from './containers/Home'
import Container from './components/Container'
import { store, persistor } from './redux/store'

import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default App
