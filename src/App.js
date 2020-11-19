import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
// import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Show from './components/Show/Show'
import axios from 'axios'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      weather: [],
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
        <main>
          <Switch>
            <Route exact path="/" render={props=>
              <Home cities={this.state.cities}/> }/>
            <Route exact path="/show" component={Show} />
          </Switch>
        </main>
      </div>
    );
  }
}
