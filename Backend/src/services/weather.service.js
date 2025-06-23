const axios = require("axios");
const timezones = require("../utils/timezones.json");

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.API_URL;
const capitals = {
  Argentina: "Buenos Aires",
  Mexico: "Ciudad de México",
  estadosUnidos: "Washington",
};
const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
      },
    });

    const dataWeather = {
       
       city: response.data.location.name,
      country: response.data.location.country,
      region: response.data.location.region,
      tz_id: response.data.location.tz_id,
      localtime: response.data.location.localtime,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      lat: response.data.location.lat,
      lon: response.data.location.lon,
      icon: response.data.current.condition.icon,
    
    }; 
    return dataWeather;
  } catch (error) {
    console.error(error);
    throw error.message;
  }
};

const fetchCountryData = async (country) => {
  const city = capitals[country];
  console.log(city)
  if (!city) {
    throw new Error("País no soportado");
  }

  const weatherData = await fetchWeather(city);
 const tzObj = timezones[country] || {};
  const tzList = Object.entries(tzObj).map(([value, key]) => ({ value, key }));

  return {
    country_name: country,
    country_capital: capitals[country],
    weather:  weatherData,
    timezones: tzList,
  };
};



module.exports = { fetchWeather, fetchCountryData};
