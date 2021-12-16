import React, { Component } from "react";
import "./style.css";
import coldimg from "./cold.png";
import mildimg from "./mild.png";
import sunnyimg from "./sunny.png";
import halimage from "./halimage.jpeg";

class HalifaxWeatherNow extends Component {
  state = {
    celsius: 0,
    farenheit: 0,
    image: null,
    temp_to_display: null,
    current_unit: 'celsius'
  };


  setImage = (temp) => {
    if (temp <= 5) {
      return coldimg
    }
    else if (temp > 5 && temp <= 20) {
      return mildimg
    }
    else {
      return sunnyimg
    }
  }

  onClick = (unit) => {
    if (unit === 'celsius') {
      this.setState({ temp_to_display: this.state.celsius, current_unit: unit });
    }
    else if (unit === 'farenheit') {
      this.setState({ temp_to_display: this.state.farenheit, current_unit: unit });
    }
  };

  getTemperatureData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=5969423&appid=bd331791a2b28c58826740662e480307&units=metric')
      .then(res => res.json())
      .then(json => json['main'])
      .then(main => main['temp'])
      .then(temp => {
        this.setState({
          celsius: temp.toFixed(2),
          farenheit: ((temp * (9 / 5)) + 32).toFixed(2),
          image: this.setImage(temp),
          temp_to_display: temp,
        }
        )
      });
  }

  componentDidMount() {
    this.getTemperatureData();
  };

  render() {
    return (
      <section id="HalifaxWeatherNow" className="HalifaxWeatherNow">
        <div className="content">
        <img alt="halimage"className="halimage" src={halimage}/>
          <h2><u>Halifax Weather Now</u></h2>
          <p>I currently live in <h1>Halifax, NS, Canada.</h1></p>
          <p> It is a wonderful city in Atlantic Canada.</p>
        </div>

        <div className="weather">
          <img src={this.state.image} alt="temperature"></img>
          
          <h1>{this.state.temp_to_display}</h1>

          <div className='unit'>
            <a onClick={() => {this.onClick('celsius');}} 
            className={this.state.current_unit === "celsius" ? "active" : null}
            href='#HalifaxWeatherNow'>°C</a>

            <a onClick={() => {this.onClick('farenheit');}} 
            className={this.state.current_unit === "farenheit" ? "active" : null}
            href='#HalifaxWeatherNow'>°F</a>
          </div>
        </div>
      </section>
    );
  }
}

export default HalifaxWeatherNow;