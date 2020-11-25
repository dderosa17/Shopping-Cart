import React from 'react';
import './App.css';
import TheStore from './Components/TheStore';
import Login from './Components/Login/';
import Cart from './Components/Cart';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Login} />
          <Route exact={true} path="/theStore" component={TheStore} />
          <Route exact={true} path="/Cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default App;

