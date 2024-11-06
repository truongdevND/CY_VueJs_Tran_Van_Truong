import { get } from './service.js'


function getData(city) {
  return get('/weather', {
    q: city,
    appid: import.meta.env.VITE_WEATHER_API_KEY,
    units: 'metric'
  })
}

export const weatherService = {

  getData,
}
