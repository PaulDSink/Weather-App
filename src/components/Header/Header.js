import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './Header.css';


export default class Header extends Component {

  render() {
    let time = new Date();
    let newTime = time.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    
    return (
      <div className="Header">
        <div className="div">The Weather App</div>
        <h2>Current Time: {newTime}</h2>
      </div>
    );
  }
}
