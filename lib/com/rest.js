const https = require('https');
const Client = require('node-rest-client').Client;
const client = new Client();

class ComRest{
  get(url, headers, options){
    const promise  = new Promise((resolve, reject) => {
      client.get(
        url,
        headers,
        (data, response) => {
          resolve(data);
        }
      );
    });
    return promise;
  }

}
module.exports = ComRest;
