import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import axios from "axios"

    const Show = () => {
        return (
            <div className="show">
                <div className="cards">
                    <h1>United States</h1>
                    <i className="wi wi-day-sunny display-1"></i>
                </div>
            </div>
        );
    };
export default Show;