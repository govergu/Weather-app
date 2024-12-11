import { WiHumidity } from "react-icons/wi";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import {
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
  FaWind,
} from "react-icons/fa6";
import weatherIcons from "./weatherDescription.jsx";
const WeatherInfo = ({ weather }) => {
  const description = weather?.weather[0]?.description;
  const icon = weatherIcons[description] || "❓";
  return (
    <>
      {weather && (
        <div className="screen">
          <div className="location-detail">
            <h2 className="display-5">{weather.name}</h2>
            <p>
              Longitude: {weather.coord.lon} <TbWorldLongitude />
            </p>
            <p>
              Lattitude: {weather.coord.lat} <TbWorldLatitude />
            </p>
            <p>
              Humidity: {weather.main.humidity} <WiHumidity />
            </p>

            <p>
              Max- Temp: {weather.main.temp_max}°C <FaTemperatureArrowUp />
            </p>
            <p>
              Min-Temp: {weather.main.temp_min}°C <FaTemperatureArrowDown />
            </p>

            <p>
              Wind speed: {weather.wind.speed} <FaWind /> Degree:{" "}
              {weather.wind.deg}
            </p>
          </div>

          <div className="temp-detail">
            <h1 className="display-1">{weather.main.temp}°C</h1>
            <p className="display-6">
              {weather.weather[0].description} {icon}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
