const Common = require('../com/common');
const ComRest = require('../com/rest');
const comRest = new ComRest();

class Geocoding {

  getGeocode(address){
    const promise  = new Promise((resolve, reject) => {
      this.geocode(address)
      .then(result =>{
        if(result.Feature && result.Feature.length > 0){
          const array = result.Feature[0].Geometry.Coordinates.split(',');
          const latlon = {
            lon : array[0],
            lat : array[1]
          }
          resolve(latlon);
        }
        else{
          resolve(null);
        }
      });
    });
    return promise;
  }

  geocode(address){
    const reqUrl = `${Common.YAHOO_GEOCODING_URL}?appid=${Common.YAHOO_APP_ID}&query=${encodeURIComponent(address)}`;
    // const reqUrl = `${Common.YAHOO_GEOCODING_URL}?appid=${Common.YAHOO_APP_ID}&query=%e6%9d%b1%e4%ba%ac%e9%83%bd%e6%b8%af%e5%8c%ba%e5%85%ad%e6%9c%ac%e6%9c%a8`;
    const promise  = new Promise((resolve, reject) => {
      comRest.get(reqUrl)
      .then((data) => {
        resolve(data.YDF);
      })
    })
    return promise;
 }
}
module.exports = Geocoding;
