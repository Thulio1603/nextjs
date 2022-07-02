import { styled, keyframes } from '../theme/stitches.config'


const load = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(350deg)' }
})

export const Spinner = styled('div', {
  width: '250px',
  height: '250px',
  display: 'inline-block',
  position: 'relative',
  transform: 'translateZ(0)',
  animation: `${load} 1.1s infinite linear`,

  borderWidth: '$2',
  borderRadius: '$circular',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderLeftColor: '$spinner',
})