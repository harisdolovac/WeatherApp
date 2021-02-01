import React, { useEffect, useState } from "react";
import "weather-icons/css/weather-icons.css";

import axios from "axios";
import WeatherIcon from "./Components/WeatherIcon";
import Select from "./Components/Select";
import CurrentDate from "./Components/CurrentDate";

import "./css/Home.css";

const Home = () => {
  //   const API_KEY = "401acd43fd2881e79258885c51d74221";

  const [data, setData] = useState({
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [
      { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
    ],
    base: "stations",
    main: {
      temp: 283.81,
      feels_like: 281.94,
      temp_min: 283.71,
      temp_max: 284.26,
      pressure: 997,
      humidity: 93,
    },
    visibility: 4900,
    wind: { speed: 2.57, deg: 200 },
    clouds: { all: 75 },
    dt: 1611871586,
    sys: {
      type: 1,
      id: 1414,
      country: "GB",
      sunrise: 1611819874,
      sunset: 1611852130,
    },
    timezone: 0,
    id: 2643743,
    name: "London",
    cod: 200,
  });

  const [city, setCity] = useState("");

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const results = await axios
  //       .get(`https://api.openweathermap.org/data/2.5/weather?q=London`, {
  //         headers: {},
  //         params: {
  //           appid: "401acd43fd2881e79258885c51d74221",
  //         },
  //       })
  //       .then((res) => setData(() => res.data));
  //     setLoading(false);
  //   };
  //   fetchItems();
  // }, []);

  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCity(e.target.value);
  };

  console.log(data);
  console.log(city);

  const Temperature = (data.main.temp - 273.15).toFixed(1);
  const MaxTemperature = (data.main.temp_max - 273.15).toFixed(1);
  const MinTemperature = (data.main.temp_min - 273.15).toFixed(1);

  return (
    <div className={`${Temperature > 16 ? "warm" : "cold"}`}>
      <h1>Weather App</h1>
      <form action="">
        <input
          className="input__Home"
          type="text"
          onChange={handleInput}
          name="city"
          placeholder="Enter City name"
        />
      </form>
      <div>
        <Select setCity={setCity} city={city} />
      </div>
      <div className="city__home">
        <h1>{data.name}</h1>
        <h1>, {data.sys.country}</h1>
      </div>
      <CurrentDate />
      <div className="tempIcon__home">
        <div className="temperature__home">
          <h1>{Temperature}</h1>
          <h3> &deg;C</h3>
        </div>
        <WeatherIcon data={data} />
      </div>
      <h2>
        min {MinTemperature}&deg;C - max {MaxTemperature}&deg;C
      </h2>

      <h1>{data.weather.description}</h1>
    </div>
  );
};

export default Home;
