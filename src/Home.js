import React, { useState } from "react";

import WeatherIcon from "./Components/WeatherIcon";
import CurrentDate from "./Components/CurrentDate";

import GeoLocation from "./Components/GeoLocation";
import Search from "./Components/Search";

import "weather-icons/css/weather-icons.css";
import "./css/Home.css";

const Home = () => {
  const [data, setData] = useState({});
  const [loactionCity, setLocationCity] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (Object.keys(data).length) {
    var toC = data.main.temp;
    var toC_max = data.main.temp_max;
    var toC_min = data.main.temp_min;
    toC = Math.floor(data.main.temp - 273.15);
    toC_max = Math.floor(data.main.temp_max - 273.15);
    toC_min = Math.floor(data.main.temp_min - 273.15);
  }

  if (Object.keys(data).length === 0) {
    return (
      <div className="default__home">
        <h1>Weather App</h1>
        <GeoLocation
          setData={setData}
          setErrorMessage={setErrorMessage}
          loactionCity={loactionCity}
          setLocationCity={setLocationCity}
        />
        <Search
          setCity={setCity}
          city={city}
          setData={setData}
          setErrorMessage={setErrorMessage}
        />
        <h4 style={{ color: "red" }}>{errorMessage}</h4>
      </div>
    );
  } else {
    return (
      <div className={`${toC > 10 ? "warm" : "cold"}`}>
        <h1>Weather App</h1>
        <GeoLocation
          setData={setData}
          setErrorMessage={setErrorMessage}
          loactionCity={loactionCity}
          setLocationCity={setLocationCity}
        />
        <Search
          setCity={setCity}
          city={city}
          setData={setData}
          setErrorMessage={setErrorMessage}
        />
        <h4 style={{ color: "red" }}>{errorMessage}</h4>

        <div className="city__home">
          <h1>{data.name}</h1>
          <h1>, {data.sys.country}</h1>
        </div>
        <CurrentDate />
        <div className="tempIcon__home">
          <div className="temperature__home">
            <h1>{toC}&deg;C</h1>
          </div>
          <WeatherIcon data={data} />
        </div>
        <h2 style={{ padding: "15px" }}>
          min {toC_min}&deg;C - max {toC_max}&deg;C
        </h2>
      </div>
    );
  }
};

export default Home;
