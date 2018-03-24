import React, { Component } from 'react';
import './App.css';

import Header from './weather/header';
import Form from "./weather/form"
import Weather from './weather/weather';

const API_KEY = '955cbff77f23d17c51aee0f53fdcebed';

class App extends Component {

  state = {
    temperature:'',
    city:'',
    humidity:'',
    description:'',
    wind:'',
    error: ''
  }
  getWeather = async (e) => {    
    e.preventDefault();

    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if(city){
        console.log(data);
          this.setState({
            temperature:data.main.temp,
            city:data.name,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            wind: data.wind.speed,
            error: ''
          })
    }else{
      this.setState({
        temperature:undefined,
        city:undefined,
        humidity:undefined,
        description:undefined,
        wind:undefined,
        error: []
      })
    }
  }
  render() {
    return (
      <div className="weather">
        <Header/>
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature}
        city={this.state.city}
        humidity={this.state.humidity}
        description={this.state.description}
        wind={this.state.wind}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
