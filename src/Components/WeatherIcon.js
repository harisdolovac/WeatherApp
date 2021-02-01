import React from "react";
import "../css/WeatherIcon.css";

const WeatherIcon = ({ data }) => {
  const iconsWeather = () => {
    if (data !== "undefined") {
      return data.weather.map((res) => {
        if (res.id >= 200 && res.id <= 232) {
          return <i key={res.id} className="wi wi-thunderstorm"></i>;
        } else if (res.id >= 300 && res.id <= 321) {
          return <i key={res.id} className="wi wi-rain-mix"></i>;
        } else if (res.id >= 500 && res.id <= 531) {
          return <i key={res.id} className="wi wi-rain"></i>;
        } else if (res.id >= 600 && res.id <= 622) {
          return <i key={res.id} className="wi wi-snow"></i>;
        } else if (res.id >= 700 && res.id <= 781) {
          return <i key={res.id} className="wi wi-fog"></i>;
        } else {
          return <i key={res.id} className="wi wi-cloudy"></i>;
        }
      });
    }
  };

  const description = () => {
    return data.weather.map((res) => res.description.toUpperCase());
  };

  return (
    <div>
      <h1 className="icon__weatherIcon">{iconsWeather()}</h1>
      <h1>{description()}</h1>
    </div>
  );
};

export default WeatherIcon;
