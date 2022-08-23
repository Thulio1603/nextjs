import { pokemon } from "../api/network";
import { API_POKEMON } from "../constants";


export async function getPokemon(number: string | string[]) {
  
  try {
    const { data } = await pokemon.get(`/pokemon/${number}`)  
    return data
  } catch (error) {
    console.log('ERROR GET POKEMON', error.message)
  }
}