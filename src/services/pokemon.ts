import { pokemon } from "../api/network";


export async function getPokemon() {
  
  try {
    const { data } = await pokemon.get('pokemon/1')  
    return data
  } catch (error) {
    console.log('ERROR GET POKEMON', error)
  }
}