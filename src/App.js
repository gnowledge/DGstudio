import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserLogin from './components/userlogin';
import Home from './components/home';
import UserRegistration from './components/userregistration';
import Chat from './components/userchat';

import Gun from 'gun/gun';
require('gun/sea');

class App extends Component {
  render() {
    return (
    	<Router>
        <div >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
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
                  <Link to={'/chat'} className="nav-link">Chat</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          {/* <h2>DGstudio App</h2> <br/> */}
          <Switch>
              <Route exact path='/newUser' component={ UserRegistration } />
              <Route path='/login' component={ UserLogin } />
              <Route path='/chat' component={ Chat }/>
              <Route path='/' component={ Home } />
          </Switch>
        </div>
      </Router>

// import './App.css';
// import Registration from './components/userregistration';
// import Chat from './components/userchat'
// class App extends Component {
//   render() {
//     return (
//          <Chat/>
//         //  <Registration/>
// >>>>>>> Stashed changes
    );
  }
}

export default App;
