const Common = require('../com/common');
const ComRest = require('../com/rest');
const comRest = new ComRest();

class Weather {

  getWeather(latlon){
    const promise  = new Promise((resolve, reject) => {
      this.weatherFromLatLon(latlon.lat,latlon.lon)
      .then(result =>{
        if(result.weather && result.weather.length > 0){
          resolve(result.weather[0]);
        }
        else{
          resolve(null);
        }
      });
    });
    return promise;
  }

  weatherFromLatLon(lat,lon){
    const splitLat = lat.split('.');
    const splitLon = lon.split('.');
    const reqUrl = `${Common.WEATHERMAP_URL}?lat=${splitLat[0]}&lon=${splitLon[0]}&APPID=${Common.WEATHERMAP_APPID}`;
    const promise  = new Promise((resolve, reject) => {
      comRest.get(reqUrl)
      .then((data) => {
        console.log(JSON.stringify(data));
        resolve(data);
      })
    })
    return promise;
 }
}
module.exports = Weather;
