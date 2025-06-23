const weatherService = require('../services/weather.service')
const getWeather = async (req, res) => {
    try {
        const city = req.params.city;
        const result = await weatherService.fetchWeather(city);

        res.status(200).json(result);
    } catch (error){
        console.log(error);
        res.status(500).json({mesagge: error.mesagge});
    }

}


const getCountryData = async (req, res) => {
  const  country  = req.params.country;


  try {
    const data = await weatherService.fetchCountryData(country);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {getWeather, getCountryData}