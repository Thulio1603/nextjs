import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChildrenProps } from '../model/reactFc'
import { styled } from '../theme/stitches.config'

type SelectProps = SelectPrimitive.SelectProps & ChildrenProps

const Select = ({children, ...rest}: SelectProps) =>
  <SelectPrimitive.Root {...rest}>{children}</SelectPrimitive.Root>

Select.Trigger = styled(SelectPrimitive.Trigger, { 
  background: '$yellow500',
  color: '$black',
  border: 'none',
  height: '60px',
  padding: '0 $sm',
  width: '$widthSelect',
  fontSize: '$xl2',
})  

Select.Content = styled(SelectPrimitive.Content, { 
  background: '$neutralLightContrast',
})

Select.Item = styled(SelectPrimitive.Item, { 
  widht: '100%',
  background: '$neutralLightContrast',
  width: '$widthSelect',
  height: '$heightSelect',
  fontSize: '$xl2',
  display: 'flex',
  alignItems: 'center',
  outline: 0,
  cursor: 'pointer',
  paddingLeft: '$sm',
})

export default Select