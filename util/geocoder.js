const NodeGeocoder = require('node-geocoder');
const  options = {
    provider: 'mapquest',
    httpAdapter: 'http',
    apiKey: 'QGsMYAQD9aPikHTN0vAdmWGyescG1ftl',
    formatter: null
}

const  geocoder =  NodeGeocoder(options);
module.exports =  geocoder; 