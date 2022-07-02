import type { NextPage } from 'next'
import { styled, defaults } from '../theme/stitches.config'
import { Spinner } from '../elements/Spinner'

const Wrapper = styled('section', { 
  width: '100%',
  padding: '$xxxl',
  ...defaults.flex.center,
})

const Home: NextPage = () => {

  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default Home
