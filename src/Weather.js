import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";

export default function Weather(props) {
  let [weatherData, setweatherData] = useState({ ready: false });
  let [cities, setCities] = useState(props.city);

  function submitResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(submitResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCities(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city..🙂"
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-success
              w-100"
              />
            </div>
          </div>
        </form>
        <WeatherSearch data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
