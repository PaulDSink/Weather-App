import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <h1>App</h1>
      </div>
    );
  }
}
