import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './Header.css';


export default class Header extends Component {

  render() {
    let time = new Date();
    let newTime = time.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    
    return (
      <div className="Header">
        <h1>Current Time: {newTime}</h1>
        <div className="div">The Weather App</div>
        {/* <nav>
          <ul>
            <li>HOME</li>
            <li>SHOW</li>
          </ul>
        </nav> */}
      </div>
    );
  }
}
