import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './Show.css'
import ForecastComp from '../ForecastComp/ForecastComp'

export default class Show extends Component {
    constructor() {
        super()

    }
    componentWillMount = async() => {
        this.props.getWeather()
    }
    

    render(){
        // console.log('show page')
        // console.log(this.props)
        const minmaxTemp=(min,max) => {
            return(
                <h3>
                    <span className="pc-4">{min}&deg;</span>
                    <span className="pc-4">{max}&deg;</span>
                </h3>
            )
        }
        


    return (
        <div className="container">
            <div className="cards">
                <h1>{this.props.data.data.location.name}, {this.props.data.data.location.region}</h1>
                <h5 className="py-4">
                    <i className={`wi ${this.props.weatherIcon}`}></i>
                </h5>
                <h1 className="py-2">{this.props.data.data.current.temp_f}&deg;</h1>

                H: {(this.props.data.data.forecast.forecastday[0].day.maxtemp_f)} <br /><br />
                L: {(this.props.data.data.forecast.forecastday[0].day.mintemp_f)}

                <h4 className="py-3">{this.props.data.data.current.condition.text} </h4>
                <img className="py-3" src={this.props.data.data.current.condition.icon} ></img>
                <Link className="homepage-button" to="/">
                    <p> Home Page </p>
                </Link>


            </div>
            <ForecastComp forecast={this.props.data.data}/>
        </div>
    )
    }
}


