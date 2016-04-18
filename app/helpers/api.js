var Axios = require('axios');
var APPID = "a425d4a01c1790eb291dcc95f8cc4648"
var WeatherHelper = {
  fetchWeather: function(city){
    return Axios.get("http://api.openweathermap.org/data/2.5/weather?q="+ city + "&type=accurate&APPID=" + APPID)
    .then(function(info){
      return info.data;
    })
    .catch(function (err) {console.warn('Error in retrieving weather data: ', err)});
  },
  fetch5DayWeather: function(city){
    return Axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&type=accurate&APPID="+APPID+"&cnt=5")
    .then(function(response){
      return response.data;
    })
    .catch(function(err){console.warn('Error in retrieving 5day forecast',err)});

  }
}


module.exports = WeatherHelper;
