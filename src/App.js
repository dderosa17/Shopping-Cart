import React from 'react';
import logo from './logo.svg';
import './App.css';
import TheStore from './Components/TheStore'
import Login from './Components/Login/'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'  

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
   <Router>
     <Switch>
       <Route exact={true} path='/' component={Login} />
       <Route exact={true} path="/TheStore" component={TheStore}/>
      </Switch>
   </Router>
  );
}
}

export default App;
