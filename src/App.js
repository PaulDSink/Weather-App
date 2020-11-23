import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Show from './components/Show/Show'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import 'weather-icons/css/weather-icons.min.css'
import HomeSearch from './components/HomeSearch/HomeSearch';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      show: false,
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
updateLocation =(name)=>{
  console.log(name.target.innerHTML)
  let city = name.target.innerHTML;
  this.setState({ location: city })
  this.getWeather();
  console.log(this.state.weather)
}

inputUpdated(event){
  const value = event.target.value;
  console.log(value)

  this.setState({ location: value})
  console.log(this.state.location)
}

getWeather = async()=>{
  if(this.state.location === ''){
    let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=383bba998c9840e5b57160359201911&q=new_York&days=7`);
    this.setState({weather: response});
    console.log(response)
    
  }else {
    let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=383bba998c9840e5b57160359201911&q=${this.state.location}&days=7`);
    this.setState({weather: response});
    console.log(response)
  }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={props=>

              <Home cities={this.state.cities} inputUpdated={this.inputUpdated} getWeather={this.getWeather} updateLocation={this.updateLocation}/> }/>
            <Route exact path="/show" render={props=>
            <Show data={this.state.weather} getWeather={this.getWeather}/> }/>
{/* 
               <Home cities={this.state.cities} location={this.state.location} inputUpdated={this.inputUpdated} getWeather={this.getWeather}/> }/>
             <Route exact path="/show/:city" render={props=>
            <Show {...this.props} data={this.state.weather}/> }/> */}

          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
