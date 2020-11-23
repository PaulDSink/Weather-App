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
        console.log(this.props)
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

                High: {(this.props.data.data.forecast.forecastday[0].day.maxtemp_f)}&deg; <br /><br />
                Low: {(this.props.data.data.forecast.forecastday[0].day.mintemp_f)}&deg;

                <h4 className="py-3">{this.props.data.data.current.condition.text} </h4>
                <img className="py-3" src={this.props.data.data.current.condition.icon} ></img><br/>
                

            </div>
            <ForecastComp forecast={this.props.data.data}/>
            <img className='map' src={'https://maps.googleapis.com/maps/api/staticmap?center=' + this.props.data.data.location.name + '&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCMM3EoaAbPMk-kIdKQevo6VPZvNMDvQM8'} ></img>
            <Link className="link" to="/">Home Page</Link>

        </div>
        
    )
    }
}


