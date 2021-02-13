import React, { useEffect } from "react";
import axios from "axios";

import { GrLocation } from "react-icons/gr";

const GeoLocation = ({
  setData,
  setErrorMessage,
  loactionCity,
  setLocationCity,
}) => {
  useEffect(() => {
    axios
      .get(
        "https://geolocation-db.com/json/09068b10-55fe-11eb-8939-299a0c3ab5e5"
      )
      .then((res) => setLocationCity(res.data.city));

    return () => {};
  }, [setLocationCity]);

  const geoTest = () => {
    axios
      .get(`${process.env.REACT_APP_WEATHER_URL}/weather?q=${loactionCity}`, {
        headers: {},
        params: {
          appid: process.env.REACT_APP_WEATHER_KEY,
        },
      })
      .then((res) => setData(() => res.data))
      .then(setErrorMessage(""));
  };

  console.log(loactionCity);

  return (
    <div>
      <h3>Check weather by your location</h3>

      <div onClick={() => geoTest()} className="icon__location">
        <GrLocation size={62} />
      </div>
      <h3>Or type city name</h3>
    </div>
  );
};

export default GeoLocation;
