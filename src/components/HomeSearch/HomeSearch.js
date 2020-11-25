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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              {/* <label className="citySearch" htmlFor='cityname'> </label> */}
              <form class="Search-bar" action="action_page.php">Please enter the City Name:</form>
              <input className='search' type='text' placeholder="Search.." name='cityname' onChange={this.props.inputUpdated}/>

              <button className="myButton" type="submit" onClick={() => {
                this.props.getWeather()
                this.props.history.push("/Show")
              }}><i class="fa fa-search"></i></button>
              
      </div>
    );
  }
}
export default withRouter(HomeSearch);