import React, { Component } from "react";

export default class Form extends Component{
    render(){
        return (
            <div className='weather-input'>
                <form onSubmit={this.props.getWeather}>
                    <input type="" name='city' placeholder="Select Your City"/>
                    <button className='weather_button'> Weather</button>
                </form>
            </div>
        )
    }

}