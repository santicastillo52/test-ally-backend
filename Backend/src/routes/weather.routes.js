const express =  require('express');
const weatherController = require('../controllers/weather.controller')
const jwtMdw = require('../middlewares/authMiddleware');
const router =  express.Router();

router.get("/weather/:city", jwtMdw, weatherController.getWeather);
router.get("/country-data/:country", jwtMdw, weatherController.getCountryData);


module.exports = router;