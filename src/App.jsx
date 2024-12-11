import React, { useState } from "react";
import { fetchWeather } from "./api.js";

import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./components/weather_info.jsx";
import Search from "./components/search.jsx";
import Error from "./components/error.jsx";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city.current.value);
      setWeather(data);
      setError("");
      city.current.value = "";
    } catch (err) {
      setError("City not found!");
      setWeather(null);
    }
  };

  return (
    <div className="content">
      <div className="box">
        <div className="initial-contents">
          <h1 className="display-1">Weather App</h1>
          <Search handleSearch={handleSearch} />
        </div>
        <Error error={error} />
        <WeatherInfo weather={weather} />
      </div>
    </div>
  );
};

export default App;
