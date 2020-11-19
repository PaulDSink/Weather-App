import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
// import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import axios from 'axios';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      weather: [],
    }
  }
  componentDidMount = async()=>{
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=383bba998c9840e5b57160359201911&q=Chicago`);

      
      this.setState({weather: response});
      console.log(response)
    }


  render() {
    return (
      <div className="App">
        <Header />
        <h1>App</h1>
      </div>
    );
  }
}
