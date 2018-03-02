
class Common{

  static get YAHOO_APP_ID(){
    return process.env.YAHOO_CLIENT_ID;
  }
  static get YAHOO_NATURAL_LANG_URL(){
    return `https://jlp.yahooapis.jp/NLUService/V1/analyze`;
  }
  static get YAHOO_GEOCODING_URL(){
    return `https://map.yahooapis.jp/geocode/V1/geoCoder`;
  }

  static get WEATHERMAP_APPID(){
    return process.env.WEATHERMAP_ID;
  }
  static get WEATHERMAP_URL(){
    return `https://api.openweathermap.org/data/2.5/weather`;
  }
}
module.exports = Common;
