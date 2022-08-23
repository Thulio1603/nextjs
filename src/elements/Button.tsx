import { styled, keyframes } from '../theme/stitches.config'

export const Button = styled('button', {
  backgroundColor: '$yellow500',
  color: '$black',
  border: '$errorBorder',
  height: '60px',
  width: '220px',
  fontSize: '$xl2',
  transition: '$button',
  '&:hover':{ 
    backgroundColor: 'transparent',
    borderColor: '$yellow600',
    borderSize: '1px',
    borderStyle: 'solid',
    color: '$white'
  }
})