import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
// import './App.css';


export default class HomeSearch extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div className="search">
              <label htmlFor='cityname'>CITY</label>
              <input className='search' type='input'name='cityname' onChange={this.props.inputUpdated}/>
              <button className="myButton" type="submit" onClick={this.props.getWeather}>Update</button>
              <Link to={"/show/" + this.props.location.split(' ').join('_')}>
                Search
                </Link>
      </div>
    );
  }
}