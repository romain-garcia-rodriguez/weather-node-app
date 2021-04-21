const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoicm9tYWluLWdhcmNpYSIsImEiOiJja25ranB3NzYwOHA4MnhtcHYwejFrYnJkIn0.VaFy6fxUBcUkqMtyZl2WPA&limit=1"

    request({ url, json: true }, (error, {body: {features}}) => {
        if(error) {
           callback('Unable to connect to location services') 
        }
        else if(!features.length) {
            callback('Unable to find a location. Try another search.')
        }
        else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geocode