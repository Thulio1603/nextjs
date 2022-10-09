import React, { useEffect } from 'react'
import { styled, defaults } from '../theme/stitches.config'
import { getPokemonLimit } from '../services/pokemon';
import { Pokemon, PokemonLimit, ResultsPokemon } from '../model/pokemon';
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'
import { useState } from 'react';
import Select from '../elements/Select';
import axios from 'axios';

export const Wrapper = styled('section', {
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

export const Title = styled('h1', {
  textTransform: 'capitalize',
  color: '$white',
  textAlign: 'center'
})

const SelectPage = () => {
  const [pokemons, setPokemons] = useState<ResultsPokemon[]>([])
  const [namePokemon, setNamePokemon] = useState('')
  const [src, setSrc] = useState('')

  const changePokemon = async () => {
    try {
      const response: PokemonLimit = await getPokemonLimit('10')
      setPokemons(response?.results)
    } catch ({ message }) {
      console.log('ERROR CHANGE POKEMON', message)
    }
  }

  const setPokemon = async (name: string, url: string) => {
    try {
      const response = await axios.get(url)
      const pokemon: Pokemon = response?.data
      setNamePokemon(name)
      setSrc(pokemon.sprites.other.dream_world.front_default)
    } catch (error) {
      //TODO criar componente generico de erro
      console.log('ERROR GET POKEMON: ', error)
    }
  }

  useEffect(() => {
    if (pokemons.length === 0) {
      changePokemon()
    }
  }, [pokemons])

  return (
    <Wrapper>
      <div style={{position: 'relative', zIndex: '9'}}>
        <Select name='select-pokemon' 
          onValueChange={(pokemon) => {
            const [name, url] = pokemon.split(';')
            setPokemon(name, url)
          }}
        >
          <Select.Trigger>
            Selecione o Pokemon
          </Select.Trigger>
          <Select.Content style={{border: 'none'}}>
            {pokemons.map((pokemon, key) => {
              return (
                <Select.Item key={key} value={`${pokemon.name};${pokemon.url}`} style={{border: 'none'}}>
                  {pokemon.name}
                </Select.Item>
              )
            })}
          </Select.Content>
        </Select>
      </div>
      {namePokemon !== '' &&
        <div style={{position: 'relative', zIndex: '1'}}>
          <Image src={src} alt={namePokemon} title={namePokemon} width={'500'} height={'500'} />

          <Title>{namePokemon}</Title>
        </div>}
    </Wrapper>
  )
}

export default SelectPage