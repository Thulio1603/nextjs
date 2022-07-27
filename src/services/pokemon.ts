import { pokemon } from "../api/network";


export async function getPokemons() {
  
  try {
    const { data } = await pokemon.get('pokemon/1')  
    console.log('service: ', data)
    return data
  } catch (error) {
    console.log('ERROR GET POKEMON', error)
  }
}