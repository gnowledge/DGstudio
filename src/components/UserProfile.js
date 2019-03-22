import React, { Component } from "react";
import Gun from "gun"
require('gun/sea');

var UserProfile = (function() {
  var full_name = "";

  var getName = function() {
    return full_name;    // Or pull this from cookie/localStorage
  };

  var setName = function(name) {
  	console.log('inside setname method for session')
    full_name = name;     
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName
  }

})();

export function authHeader() {
  var gun = Gun()
  var user = gun.user()
  var auth = user.auth('') 
}

export default UserProfile;

