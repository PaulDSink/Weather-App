import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './Header.css';


export default class Header extends Component {

  render() {
    let time = new Date().toLocaleTimeString();
    
    return (
      <div className="Header">
        <h1>Weather App at {time}</h1>
        
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
