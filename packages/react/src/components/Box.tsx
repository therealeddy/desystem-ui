import { ElementType } from 'react'
import styled from 'styled-components'

export interface BoxProps {
  as?: ElementType
}

export const Box = styled.div`
  padding: ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray800};
  border: 1px solid ${(props) => props.theme.colors.gray600};
`
