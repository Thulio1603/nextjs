import axios from 'axios';
import { API_URL, API_POKEMON, API_WEATHER } from '../constants'

export const api = axios.create({
  baseURL: API_URL,
})

export const pokemon = axios.create({
  baseURL: API_POKEMON,
})

export const weather = axios.create({
  baseURL: API_WEATHER
})