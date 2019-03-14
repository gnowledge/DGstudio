import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Gun from 'gun/gun';
require('gun/sea');

export default class UserRegistration extends Component {
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
    this.emailvalidation = this.emailvalidation.bind(this);
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
  emailvalidation(event){
    var success=0;
    var email_input=this.state.email;
    var format=/^.*@.*/; //regex for @somewhere
    if(format.test(email_input)){
      success=1;
    }
    if(success===0){

      this.setState({email:''});
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {

      username: this.state.username,
      password: this.state.password
    }

    var gun = Gun();
    var user = gun.user();

    user.create(obj.username, obj.password)
    console.log(`The values are ${this.state.email}, ${this.state.username}, and ${this.state.password}`)
    this.setState({
      email: '',
      username: '',
      password: ''
    })
  }

    render(){

      return (
                <div>
                <form onSubmit={this.onSubmit}>
                    <div className="Create-A-New-Account">
                      <center>Create A New Account</center> <br></br><br></br>
                    </div>
                    <center>
                    <div className="Rectangle col">
                      <div className="form-group">
                        <div className="label-style"><label><br></br><br></br><b>Email</b></label></div>
                          <input 
                            type="text" 

                            value={this.state.email}
                            className="form-control" 
                            style={{width:'90%'}} 
                            placeholder="Enter Email" 
                            onChange={this.onChangeEmail}
                            onClick={this.emailvalidation}></input>
                       </div>
                     
                      <div className="form-group">

                      <div className="label-style"><label><b>Username</b></label></div>
                        <input 
                          type="text" 
                          required="required" 
                          className="form-control"  
                          style={{width:'90%'}} 
                          placeholder="Enter Username" 
                          value={this.state.username} 
                          onChange={this.onChangeUserName}></input>
                      </div>
                      <div className="form-group">

                      <div className="label-style"><label><b>Password</b></label></div>
                      <input 
                        type="password" 
                        required="required" 
                        className="form-control" 
                        style={{width:'90%'}} 
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}></input>
                      </div>
                      {/* <div className="form-group">
                            <div class="g-recaptcha" data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                            <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha"></input>
                            <div class="help-block with-errors"></div>
                        </div> */}

                      <div className="form-group">

                      <input type="submit" value="Sign Up" className="Rectangle-Copy-3 trial"></input>
                      </div>
                    </div>
                    </center>
                </form>
                </div>
           );
    }
    
  }
  