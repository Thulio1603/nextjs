import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    const { getByTestId } = render(<Home />)

    const spinner = getByTestId('spinner')
    // const spinner = screen.getByTestId('spinner')
    
    expect(spinner).toBeInTheDocument()
  })
})