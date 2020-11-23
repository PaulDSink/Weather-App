import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import HomeSearch from '../HomeSearch/HomeSearch'
import './Home.css'

export default class Home extends Component {

    render() {
        const cityList = this.props.cities.map((city)=>{
            return (

                <Link to="/show/">
                    <p className="city" onClick={this.props.updateLocation}>{city.name}, {city.state}</p>

                 {/* <Link to={"/show/" + city.name.split(' ').join('_')}>
                     <p className="city">{city.name}, {city.state}</p> */}

                </Link>
            )
        })
        return (
            <div className="Home">
                <HomeSearch location={this.props.location} inputUpdated={this.props.inputUpdated} getWeather={this.props.getWeather}/>
                <h3>Popular Cities:</h3>
                <ul className="city-list">
                    {cityList}
                </ul>
            </div>
        )
    }
}