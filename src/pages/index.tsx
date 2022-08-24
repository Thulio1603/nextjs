import React from 'react'
import { styled, defaults } from '../theme/stitches.config'
import { getPokemon } from '../services/pokemon';
import { pokemon } from '../model/pokemon';
import "react-multi-carousel/lib/styles.css";
import { getWeather } from '../services/weather';
import Image from 'next/image';
import { Button } from '../elements/Button';
import { api } from '../api/network';
import { useEffect } from 'react';
import { useState } from 'react';

const Wrapper = styled('section', {
  width: '100%',
  padding: '$xs',
  flexFlow: 'column',
  height: '85vh',
  ...defaults.flex.center,
  justifyContent: 'space-between',
  '@md': { 
    padding: '$xxxl',
  }
})

const Title = styled('h1', { 
  textTransform: 'capitalize',
  color: '$white',
  textAlign: 'center'
})

type homeProps = { 
  pokemon: pokemon
}

const Home = ({ pokemon }: homeProps) => {
  if(pokemon){
    const { sprites } = pokemon
    const [namePokemon , setNamePokemon] = useState(pokemon?.name)
    const [src , setSrc] = useState(sprites?.other.dream_world.front_default || '')
    const [countPokemon, setCountPokemon] = useState(1)
  
    const changePokemon = async () => { 
      setCountPokemon(countPokemon + 1)
      try {
        const response = await api.get('api/pokemon', { params: { id: countPokemon }})
        const newPokemon: pokemon = response.data
        setNamePokemon(newPokemon.name)
        setSrc(newPokemon.sprites.other.dream_world.front_default)
      } catch ({ message }) {
        console.log('ERROR CHANGE POKEMON', message)
      }
    }
  
    return (
      <Wrapper>
        <Image src={src} alt={namePokemon} title={namePokemon} width={'500'} height={'500'}/>
        
        <Title>{namePokemon}</Title>
        <Button onClick={() => changePokemon()}>Trocar Pokemon</Button>
      </Wrapper>
    )
  }else { 
    return <Title>Atualize a tela</Title>
  }

}

export default Home

// TODO estudar melhor forma de tipar pokemonProps. Pokemon com parametro obrigatorios
type pokemonProps = { 
  id?: number
  base_experience?: number
  name?: string
  past_types?: []
  species?: {
    name: string
    url: string
  }
  sprites?: { 
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
  stats?: []
  types?: [{
    slot: number
    type: {}
  }]
  weight?: number
}

export async function getServerSideProps({req, res}) {
  let pokemon: pokemonProps = {}

  try {
    const response = await getPokemon('1')
    pokemon = response
  } catch ({ message, status }) {
    console.log('ERROR GET POKEMONS', message)
  }

  try {
    const weather = await getWeather()
    console.log('weather: ', weather)
  } catch ({ message }) {
    console.log('ERROR GET Weather', message)
  }


  return {
    props: {
       pokemon: pokemon || null
    }
  }
}