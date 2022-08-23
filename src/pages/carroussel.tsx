import React from 'react'
import { styled, defaults } from '../theme/stitches.config'
import { Spinner } from '../elements/Spinner'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Wrapper = styled('section', {
  width: '100%',
  padding: '$xs',
  ...defaults.flex.center,
  '@md': { 
    padding: '$xxxl',
  }
})

const CarouselStyle = styled(Carousel, {
  width: '100%',
  '@mobile':{
    'li': { 
      ...defaults.flex.center,
    },
  },
})


const config = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
    partialVisibilityGutter: 50
  },
  tablet: {
    breakpoint: { max: 1024, min: 767 },
    slidesToSlide: 2,
    items: 3,

  },
  mobile_md: {
    breakpoint: { max: 767, min: 464 },
    slidesToSlide: 1,
    items: 2,
  },
  mobile_xd: {
    breakpoint: { max: 464, min: 0 },
    slidesToSlide: 1,
    items: 1,
  }
};

const Carroussel = () => {
  return (
    <Wrapper>
      <CarouselStyle 
        responsive={config}
        infinite={false}
        customTransition="all .5"
        transitionDuration={500}
        showDots={false}
        centerMode={false}
        arrows={true}
        swipeable={false}
        partialVisible={true} 
      >
        <Spinner color={'green'} data-testid='spinner' />
        <Spinner color={'red'} data-testid='spinner' />
        <Spinner color={'yellow'} data-testid='spinner' />
        <Spinner color={'blue'} data-testid='spinner' />
        <Spinner color={'green'} data-testid='spinner' />
        <Spinner color={'red'} data-testid='spinner' />
        <Spinner color={'yellow'} data-testid='spinner' />
        <Spinner color={'blue'} data-testid='spinner' />
        <Spinner color={'green'} data-testid='spinner' />
        <Spinner color={'red'} data-testid='spinner' />
        <Spinner color={'yellow'} data-testid='spinner' />
        <Spinner color={'blue'} data-testid='spinner' />
        <Spinner color={'green'} data-testid='spinner' />
        <Spinner color={'red'} data-testid='spinner' />
        <Spinner color={'yellow'} data-testid='spinner' />
        <Spinner color={'blue'} data-testid='spinner' />
        <Spinner color={'green'} data-testid='spinner' />
        <Spinner color={'red'} data-testid='spinner' />
        <Spinner color={'yellow'} data-testid='spinner' />
        <Spinner color={'blue'} data-testid='spinner' />
        <Spinner color={'green'} data-testid='spinner' />
        <Spinner color={'red'} data-testid='spinner' />
        <Spinner color={'yellow'} data-testid='spinner' />
        <Spinner color={'blue'} data-testid='spinner' />
      </CarouselStyle>
    </Wrapper>
  )
}

export default Carroussel