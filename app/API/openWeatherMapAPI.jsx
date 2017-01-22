//Using the axios npm module to get/post API data and make http and xmlhttp requests
//The API being used is at openweathermap.org under 'current weather data' docs
//open the example with your key and copy the URL as the constant below

let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=24c35fcf5d58132cf503f5fe31e8685c&units=imperial';

//axios supports Promises
module.exports = {
  getTemp: function(location){
    let encodedLocation = encodeURIComponent(location);                 //encodes the location string to the browser
    let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;    //the encoded string is fed to the API constant
    //axios get request
    return axios.get(requestURL).then(function(res){               //'response' holds returned api data; axios includes Promise functionality, the user just needs to create the resolve and reject cases
                                                                        //this api doesnt conform to normal html requests and needs edge cases, hence the conditional
      if(res.data.cod && res.data.message){                   //if both 'cod'(html status) and 'message' properties come back,
        throw new Error(res.data.message);                         // throw message else return 'temp' property
      } else {                                                          //this offers the resolve promise in the 'weather' module both cases
        return res.data.main.temp;
      }
    }, function(err){
      //throw new Error(response.data.message);                        //old Axiom return; with updated axiom use next line...
      throw new Error("Unable to fetch weather for that location");    //returns error for 'weather' mod reject case
    });
  }
};

// Anything inside of `${}` is run as a js expression.  Like <%= %> in Ruby on Rails.
