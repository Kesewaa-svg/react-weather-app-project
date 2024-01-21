import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather city="Paris" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://jessica-abiri-portfolio.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Jessica Abiri
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Kesewaa-svg/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
