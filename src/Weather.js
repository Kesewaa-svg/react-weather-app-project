import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..🙂"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-success"
              w-100
            />
          </div>
        </div>
      </form>
      <h1>Amsterdam</h1>
      <ul>
        <li>Sunday 15:00</li>
        <li>Snow</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://lh3.googleusercontent.com/k0gAYlLrKnJ4Oxtwbs1XRM5cnjXgiUMXx9ClMugpC34_4D45DRTExwUPHa0UpUo4lRy0j1BLPgoK8EV6LkKFvdzQWA=s60"
            alt="Snow"
          />{" "}
          <span className="temperature">-1</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:80%</li>
            <li> Wind: 11 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
