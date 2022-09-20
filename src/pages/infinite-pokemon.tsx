import React from 'react'
import { styled, defaults } from '../theme/stitches.config'
import { getPokemon } from '../services/pokemon';
import { pokemon } from '../model/pokemon';
import "react-multi-carousel/lib/styles.css";
import { getWeather } from '../services/weather';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { Spinner } from '../elements/Spinner'
import { pokemonProps } from '.';

const Wrapper = styled('section', {
  width: '100%',
  padding: '$xs',
  flexFlow: 'column',
  ...defaults.flex.center,
  justifyContent: 'space-between',
  marginTop: '350px',
  '@md': {
    padding: '$xxxl',
  }
})

const Title = styled('h1', {
  textTransform: 'capitalize',
  color: '$white',
  textAlign: 'center'
})

const Infinite = styled('div', { 
  width: '100%',
  height: '5px',
  marginTop: '500px'
})

type homeProps = {
  pokemon: pokemon
}

const Home = ({ pokemon }: homeProps) => {
  if (!pokemon) {
    return <Title>Sem Pokemon</Title>
  }

  const [countPokemon, setCountPokemon] = useState(1)
  const { loadMoreRef, loading, items } = useInfiniteScroll(pokemon, `${countPokemon + 1}`)
  const { sprites } = pokemon
  const [namePokemon, setNamePokemon] = useState(pokemon?.name)
  const [src, setSrc] = useState(sprites?.other.dream_world.front_default || '')
  const [next, setNext] = useState(false)
  
  useEffect(() => {
    if (items.length) {
      setNamePokemon(items[countPokemon]?.name)
      setSrc(items[countPokemon]?.sprites.other.dream_world.front_default)
      setCountPokemon(countPokemon + 1) 
    }
  }, [items])

  useEffect(() => { 
    const scroll = document.getElementById('infinite')?.offsetTop
    setTimeout(() => { 
      window.scrollTo({
        top: scroll,
        behavior: 'smooth'
      });
      setNext(!next)
    }, 300)
  },[next])

  return (
    <Wrapper>
      {
        items.length ?
          items?.map((item: pokemon, key: number) => {
            return (
              <div key={key}>
                <Image src={item.sprites.other.dream_world.front_default} alt={item.name} title={item.name} width={'500'} height={'500'} />
                <Title>{item.name}</Title>
              </div>
            )
          }) 
        :
        <>
          <Image src={src} alt={namePokemon} title={namePokemon} width={'500'} height={'500'} />
          <Title>{namePokemon}</Title>
        </>
      }

      <Infinite ref={loadMoreRef} id='infinite'>
        {loading && <Spinner />}
      </Infinite>
    </Wrapper>
  )
}

export default Home

export async function getServerSideProps({ req, res }) {
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