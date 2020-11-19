import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'

export default class Home extends Component {

    render() {
        const cityList = this.props.cities.map((city)=>{
            return (
                <Link to="/show/">
                    <p className="city">{city.name}, {city.state}</p>
                </Link>
            )
        })
        return (
            <div className="Home">
                <h3>Popular Cities:</h3>
                <ul className="city-list">
                    {cityList}
                </ul>
            </div>
        )
    }
}