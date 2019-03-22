import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Gun from "gun"
require('gun/sea');

export default class UserLogout extends Component {
  
  constructor(props){
    super(props);

                
  }	

  componentDidMount() {

  	var gun = Gun();
  	var user = gun.user();
  	user.leave();
  	this.props.history.push("/login");
  }

  render(){
  	return true
  }

}

