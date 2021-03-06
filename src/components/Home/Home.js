import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './Home.css';
import HomeSearch from '../HomeSearch/HomeSearch'

export default class Home extends Component {

    render() {
        const cityList = this.props.cities.map((city)=>{
            return (

                <Link className="list-item" to="/show/">
                    <p className="city" onClick={this.props.updateLocation}>{city.name}, {city.state}</p>
                </Link>
            )
        })
        return (
            <div className="Home">
                <HomeSearch location={this.props.location} inputUpdated={this.props.inputUpdated} getWeather={this.props.getWeather}/>
                < Link className='ipweather' to={'/show/current'}>
                    <p>Your Current Weather</p>
                </Link>
                <h3>Popular Cities:</h3>
                <div className="city-list">
                    {cityList}
                </div>
            </div>
        )
    }
}