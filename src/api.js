import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
;

export const fetchWeather = async (city) => {
  const response = await axios.get(API_URL, {
    params: {
      q: city,
      appid: import.meta.env.VITE_WEATHER_API_KEY,
      units: 'metric', // Use 'imperial' for Fahrenheit
    },
  });
  return response.data;
};
