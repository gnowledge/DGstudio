import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Gun from "gun"
require('gun/sea');

export default class UserLogin extends Component {
  
  constructor(props){
    super(props);
    this.state ={
                  username:'',
                  email:'',
                  password: ''
                };
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);            
  }	

   onChangeEmail(event){
    this.setState({email: event.target.value});
   }

   onChangeUserName(e) {
    this.setState({
      username: e.target.value
    })  
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    var gun = Gun();
    var user = gun.user();
    user.auth(this.state.username, this.state.password, function(ack){ if(ack.err){ alert("wrong"); }
    else {
      alert("sucsess");
    } })

    console.log(`The values are ${this.state.email}, ${this.state.username}, and ${this.state.password}`)
    this.setState({
      email: '',
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="Absolute-Center rectangle">
        <form onSubmit={this.onSubmit} className="form-signin text-center">
          <h1 className="h3 mb-3 font-weight-normal text-center">Please Login </h1>
          <label  className="sr-only">
            User Name 
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Username"
            value={this.state.username} 
            onChange={this.onChangeUserName}
            required
          />
          
          <label  className="sr-only">
            Password
          </label>
          
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangePassword}
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          
          <div className="form-group">

          <input type="submit" value="Login" className="Rectangle-Copy-3"></input>
          </div>

        </form>
      </div>
    );
  }
}
