import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserLogin from './components/userlogin';
import Home from './components/home';
import UserRegistration from './components/userregistration';
import UserLogout from './components/userlogout';

import Gun from "gun";
require('gun/sea');

class App extends Component {
  render() {
    return (
    	<Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">DGstudio App </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/newUser'} className="nav-link">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/logout'} className="nav-link">Log out</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>DGstudio App</h2> <br/>
          <Switch>
              <Route exact path='/newUser' component={ UserRegistration } />
              <Route path='/login' component={ UserLogin } />
              <Route path='/logout' component={ UserLogout }/>
              <Route path='/' component={ Home } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
