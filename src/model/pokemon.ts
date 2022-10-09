export type Pokemon = { 
  id: number
  base_experience?: number
  name: string
  past_types?: []
  species?: {
    name: string
    url: string
  }
  sprites: { 
    back_default: string
    back_female: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
    other: {
      dream_world: {
        front_default: string
        front_female: string
      }
      home: {}
    }
    versions: {}
  }
  stats: []
  types: [{
    slot: number
    type: {}
  }]
  weight: number
}

export type ResultsPokemon = { 
  name: string
  url: string
}

export type PokemonLimit = { 
  count: number
  next: string
  previus: string
  results: ResultsPokemon[]
}