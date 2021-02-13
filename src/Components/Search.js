import React from "react";
import axios from "axios";

const Search = ({ setCity, city, setData, setErrorMessage }) => {
  const search = (evt) => {
    if (evt.key === "Enter") {
      axios(
        `${process.env.REACT_APP_WEATHER_URL}/weather?q=${city}&APPID=${process.env.REACT_APP_WEATHER_KEY}`
      )
        .then((result) => {
          setData(result.data);
          setCity("");
          setErrorMessage("");
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="input__Home"
          type="text"
          onChange={(e) => setCity(e.target.value)}
          name="city"
          placeholder="Enter City name"
          value={city}
          onKeyDown={search}
        />
      </form>
    </div>
  );
};

export default Search;
