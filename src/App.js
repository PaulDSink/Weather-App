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
import backgroundImages from './BackgroundImages';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      show: false,
      weather: [],
      backgroundPic: 'https://mcdn.wallpapersafari.com/medium/1/77/suAMgq.jpeg',
      iplocation: '',
      ipweather: [],
      forecast: '',
      location: '',
       cities: [
        {
          name: 'New York',
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
    // this.backgroundImage = this.backgroundImage.bind(this);
  }
componentDidMount = ()=>{
  this.ipLocation();
  this.getWeather();
  
  
  
};
updateLocation =(name)=>{
  console.log(name.target.innerHTML)
  let city = name.target.innerHTML;
  this.setState({ location: city })
  this.getWeather();
  // console.log(this.state.weather)
  
}
// backgroundImage(){
//   let currentCode = this.state.ipweather.data.current.condition.code;
//   console.log(currentCode);
//   var currentPic = backgroundImages.find(function (code) {return code.code === currentCode});
//   console.log(backgroundImages);
//   // this.setState({backgroundPic: currentPic});
// }
ipLocation = async()=>{
  let response = await axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=25b4efee1bfe40a28d0e03652fded5dd')
  // console.log(response.data.city)
  // console.log('ip')
  this.setState({iplocation: response.data.city})
  this.getWeather();
  
}

inputUpdated(event){
  const value = event.target.value;
  // console.log(value)

  this.setState({ location: value})
  // console.log(this.state.location)
}


getWeather = async()=>{
  if(this.state.location === ''){
    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=383bba998c9840e5b57160359201911&q=new_York&days=7`);
    this.setState({weather: response});
    console.log(response)
    
  }else {

    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=383bba998c9840e5b57160359201911&q=${this.state.location.split(" ").join("_")}&days=7`);
    this.setState({weather: response});
    console.log(response)
  }
  let ipweather = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=383bba998c9840e5b57160359201911&q=${this.state.iplocation}&days=7`);
  this.setState({ipweather: ipweather})
  console.log(ipweather)
  // this.backgroundImage();
  }

  render() {
    // console.log(this.state.backgroundPic)
    return (
      <div className="App" style={{ backgroundImage: `url('${this.state.backgroundPic}')`}}>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={props=>

              <Home cities={this.state.cities} inputUpdated={this.inputUpdated} getWeather={this.getWeather} updateLocation={this.updateLocation}/> }/>
            <Route exact path="/show" render={props=>
            <Show data={this.state.weather} getWeather={this.getWeather}/> }/>
            <Route exact path="/show/current" render={props=>
            <Show data={this.state.ipweather} getWeather={this.getWeather}/> }/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
