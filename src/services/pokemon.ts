import { pokemon } from "../api/network";

export async function getPokemon(searchedPokemon: string | string[]) {
  try {
    const { data } = await pokemon.get(`/pokemon/${searchedPokemon}`)  
    return data
  } catch (error) {
    console.log('ERROR GET POKEMON', error.message)
  }
}

export async function getPokemonLimit(limit: string) { 
  try {
    const { data } = await pokemon.get(`/pokemon?limit=${limit}`)  
    return data
  } catch (error) {
    console.log('ERROR GET POKEMON', error.message)
  }
}