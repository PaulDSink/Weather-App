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
      forecast: '',
      location: '',
    }
  }
componentDidMount = ()=>{
  this.getWeather();
};


  getWeather = async()=>{
    let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=383bba998c9840e5b57160359201911&q=new_York&days=7`);

      
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
