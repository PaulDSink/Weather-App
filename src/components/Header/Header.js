import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './Header.css';


export default class Header extends Component {

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
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
