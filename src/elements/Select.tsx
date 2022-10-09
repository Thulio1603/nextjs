import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChildrenProps } from '../model/reactFc'
import { styled } from '../theme/stitches.config'

type SelectProps = SelectPrimitive.SelectProps & ChildrenProps

const Select = ({children, ...rest}: SelectProps) =>
  <SelectPrimitive.Root {...rest}>{children}</SelectPrimitive.Root>

Select.Trigger = styled(SelectPrimitive.Trigger, { 
  background: 'black'
})  

Select.Content = styled(SelectPrimitive.Content, { 
  background: 'purple'
})

Select.Item = styled(SelectPrimitive.Item, { 
  background: 'red'
})

export default Select