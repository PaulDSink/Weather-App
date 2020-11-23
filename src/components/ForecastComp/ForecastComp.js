import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './ForecastComp.css';


export default class ForecastComp extends Component{
    constructor(){
        super()
    }
    render(){
        // console.log(this.props.forecast.forecast.forecastday)
        let forecast = this.props.forecast.forecast.forecastday.map((item,index)=>{
        return(
            <div className='forecastcontainer'>
                <div className='day'>
            <h1 className="date">{this.props.forecast.forecast.forecastday[index].date.toString()}</h1>
                {/* <h5 className="py-4">
                    <i className={`wi ${this.props.weatherIcon}`}></i>
                </h5> */}
            <h1 className="py-2">High: {this.props.forecast.forecast.forecastday[index].day.maxtemp_f}&deg;</h1>
            <h1 className="py-2">Low: {this.props.forecast.forecast.forecastday[index].day.mintemp_f}&deg;</h1>

                

            <h4 className="py-3">{this.props.forecast.forecast.forecastday[index].day.condition.text} </h4>
            <img className="py-4" src={this.props.forecast.forecast.forecastday[index].day.condition.icon}></img>
            </div>

            </div>
        )
    })
    return <div className="forecast">{forecast}</div>
    }
}