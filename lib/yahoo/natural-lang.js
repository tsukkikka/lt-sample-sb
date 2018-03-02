const Common = require('../com/common');
const ComRest = require('../com/rest');
const comRest = new ComRest();

class NaturalLang {

  analysis(text){
    const promise  = new Promise((resolve, reject) => {
      this.NLUService(text)
      .then(data =>{
        resolve(data);
      });
    });
    return promise;
  }

  NLUService(text){
    const reqUrl = `${Common.YAHOO_NATURAL_LANG_URL}?appid=${Common.YAHOO_APP_ID}&intext=${encodeURIComponent(text)}`;
    const promise  = new Promise((resolve, reject) => {
      comRest.get(reqUrl)
      .then((data) => {
        console.log(JSON.stringify(data.result));
        resolve(data.result);
      })
    })
    return promise;
 }

}
module.exports = NaturalLang;
