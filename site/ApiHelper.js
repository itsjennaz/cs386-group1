const request = require('request');

module.exports = {

  makeAPICall : function(url) {
    // Options creates the API data through Rapid API. Normally this would just be an API url.
    const options = {
      method: 'GET',
      url: 'https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-product',
      qs: {
        url: 'https://www.amazon.com/EVGA-08G-P5-3755-KR-GeForce-Cooling-Backplate/dp/B08L8L71SM/ref=sr_1_3?dchild=1&keywords=3070&qid=1627266886&sr=8-3'
      },
      headers: {
        'x-rapidapi-key': '1ecf6615a2msheebb41d568da8d3p19fba7jsn69f2b917b15c',
        'x-rapidapi-host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com',
        useQueryString: true
      }
    };
    
    return new Promise((resolve, reject) =>{
      request(options, function(error, response, body) {
        if (error) reject(error);
        resolve(body);
      });
    })
  }

}