import React from "react";
import UpdatedDate from "./UpdatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherSearch(props) {
  return (
    <div className="WeatherSearch">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <UpdatedDate date={props.data.date} />{" "}
        </li>

        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li> Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
