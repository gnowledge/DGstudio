import React, { Component } from 'react';
import UserProfile from './UserProfile';
import Gun from "gun"
require('gun/sea');

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Welcome { UserProfile.getName() }to Home Component !!</p>
            </div>
        )
    }
}