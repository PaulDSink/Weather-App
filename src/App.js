import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
// import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Show from './components/Show/Show'
import axios from 'axios'
import 'weather-icons/css/weather-icons.min.css'
import HomeSearch from './components/HomeSearch/HomeSearch';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      weather: [],
      forecast: '',
      location: '',
       cities: [
        {
          name: 'New York City',
          state: 'NY',
        }, {
          name: 'Los Angeles',
          state: 'CA',
        }, {
          name: 'Chicago',
          state: 'IL',
        }, {
          name: 'Houston',
          state: 'TX',
        }, {
          name: 'Phoenix',
          state: 'AZ',
        }, {
          name: 'Philadelphia',
          state: 'PA',
        }, {
          name: 'San Antonio',
          state: 'TX',
        }, {
          name: 'San Diego',
          state: 'CA',
        }, {
          name: 'Dallas',
          state: 'TX',
        }, {
          name: 'San Jose',
          state: 'CA',
        }
      ],
    }
    this.inputUpdated = this.inputUpdated.bind(this);
  }
componentDidMount = ()=>{
  this.getWeather();
};

inputUpdated(e){
  const value = e;
  console.log(value)

  this.setState({ location: value})
  console.log(this.state.location)
  this.getWeather();
  
}

  getWeather = async()=>{
    if(this.state.location === ''){
      let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=383bba998c9840e5b57160359201911&q=new_York&days=7`);
      
    }
      let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=383bba998c9840e5b57160359201911&q=${this.state.location}&days=7`);
      

      
      this.setState({weather: response});
      console.log(response)
    }


  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={props=>
              <Home cities={this.state.cities}/> }/>
            <Route exact path="/show" component={Show} />
          </Switch>
          <HomeSearch inputUpdated={this.inputUpdated}/>
        </main>
      </div>
    );
  }
}
