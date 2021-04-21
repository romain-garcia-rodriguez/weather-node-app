const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=e61c0db183f7c5ba2489d65f028a0c8a&query=${latitude},${longitude}&units=m`

    request({ url, json: true }, (error, {body: {current, error:appError}}) => {
        if(error) {
            callback('Unable to connect to weather services')
        }
        else if(appError) {
            callback('Unable to find a location')
        }
        else {
            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out. The humidity is ${current.humidity}%.`)
        }
    })
}

module.exports = forecast