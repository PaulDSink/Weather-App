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
          <form onSubmit={ (event)=>{
              event.preventDefault();
            //   console.log(event.target.cityname.value);
              this.props.inputUpdated(event.target.cityname.value)
          }}>
              <label htmlFor='cityname'>CITY</label>
              <input className='search' type='input'name='cityname' />
              <button className="myButton" type="submit">Search</button>    
        </form>
                
        
      </div>
    );
  }
}