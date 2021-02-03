import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Pages/HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Card from './Pages/Card'


ReactDOM.render(
  
    <Router>
      <Switch>
      <Route path='/' component={HomePage} exact/>   
      <Route path='/card' component={Card}  />

      </Switch>
    
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

