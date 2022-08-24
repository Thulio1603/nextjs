import { weather } from "../api/network";
import { SECRET_KEY_WEATHER } from "../constants";

export async function getWeather() {
  try {
    const { data } = await weather.get('/weather', { params: { key: SECRET_KEY_WEATHER, city_name: 'Campinas,SP' } })  
    console.log('service: ', data)
    return data
  } catch (error) {
    console.log('ERROR GET WEATHER', error.message)
  }
}