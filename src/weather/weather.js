import React, { Component } from "react";

export default class Weather extends Component{
    render(){
        return (
            <div className='weather-info'>
                    {
                        this.props.city && <p className='weather-info_city'>
                        <span className='bold'>City:</span> {this.props.city}</p>
                    }
               
                    {
                        this.props.temperature && <p className='weather-info_temp'>
                        <span className='bold'>Temperature:</span> {this.props.temperature + ' ' + '°C'}</p>
                    }            
                
                    {
                        this.props.humidity && <p className='weather-info_humidity'>
                        <span className='bold'>Humidity:</span> {this.props.humidity + "%"}</p>
                    }
                
                
                    {
                        this.props.description && <p className='weather-info_condition'>
                        <span className='bold'>Conditions:</span> {this.props.description}</p>
                    }
                    {
                        this.props.wind && <p className='weather-info_wind'>
                        <span className='bold'>Wind Speed:</span> {this.props.wind + ' ' + 'm/s'}</p>
                    }
                
                
                    {
                        this.props.error && <p className='error-message'>
                        Please Enter Your City</p>
                    }
                
            </div>
        )
    }

}