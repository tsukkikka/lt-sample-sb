const NaturalLang = require('./yahoo/natural-lang');
const naturalLang = new NaturalLang();

const Geocoding = require('./yahoo/geocoding');
const geocoding = new Geocoding();

const Weather = require('./openweathermap/weather');
const weather = new Weather();

class ltBot {

  talk(text){
    const promise  = new Promise((resolve, reject) => {
      naturalLang.analysis(text)
      .then(ret =>{
        if(ret.method === 'WEATHER'){
          return this.weather(ret);
        }
        else{
          return null;
        }
      })
      .then(ret =>{
        resolve(ret);
      })
      .catch(ret =>{
        reject("何を言っているかわかりません。");
      });
    });
    return promise;
  }

  weather(ret){
    const promise  = new Promise((resolve, reject) => {
      geocoding.getGeocode(ret.param_place)
      .then(ret =>{
        return weather.getWeather(ret);
      })
      .then(ret =>{
        resolve(ret.description);
      })
      .catch(ret =>{
        reject("天気がわかりません")
      })
    });
    return promise;
  }

}
module.exports = ltBot;
