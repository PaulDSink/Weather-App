import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './HomeSearch.css';
import {withRouter} from 'react-router-dom';


class HomeSearch extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div className="search0">
              <label className="citySearch" htmlFor='cityname'>Please enter the City Name: </label>
              <input className='search' type='input'name='cityname' onChange={this.props.inputUpdated}/>
              <button className="myButton" type="submit" onClick={() => {
                this.props.getWeather()
                this.props.history.push("/Show")
              }}>Search</button>
              
      </div>
    );
  }
}
export default withRouter(HomeSearch);