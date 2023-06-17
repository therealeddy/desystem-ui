import { ComponentProps } from 'react'
import styled from 'styled-components'

interface DefaultProps {}

export const Box = styled.div<DefaultProps>`
  padding: ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray800};
  border: 1px solid ${(props) => props.theme.colors.gray600};
`

export interface BoxProps extends ComponentProps<typeof Box> {}
