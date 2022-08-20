import { pokemon } from "../api/network";


export async function getPokemon(number: string) {
  
  try {
    const { data } = await pokemon.get(`pokemon/${number}`)  
    return data
  } catch (error) {
    console.log('ERROR GET POKEMON', error)
  }
}