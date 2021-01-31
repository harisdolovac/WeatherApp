import React, { useEffect, useState } from "react";
import "weather-icons/css/weather-icons.css";

import axios from "axios";
import WeatherIcon from "./Components/WeatherIcon";
import Select from "./Components/Select";

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
  const [isLoading, setLoading] = useState(true);
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
  console.log(MaxTemperature);
  return (
    <div>
      <h1> hello weather</h1>
      <form action="">
        <label>Type Name of City</label>
        <input
          type="text"
          onChange={handleInput}
          name="city"
          placeholder="Enter City name"
        />
      </form>
      <Select setCity={setCity} />
      <h1>{data.name}</h1>
      <h1>{data.sys.country}</h1>

      <WeatherIcon data={data} />

      <h1>{Temperature}&deg;C</h1>

      <h1>Max temperature {MaxTemperature}&deg;C</h1>
      <h1>Min temperature {MinTemperature}&deg;C</h1>

      <h1>{data.weather.description}</h1>
    </div>
  );
};

const minmaxTemp = (min, max) => {
  return (
    <h3>
      <span>{min}&deg;</span>
      <span>{max}&deg;</span>
    </h3>
  );
};

export default Home;
