import { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  size?: 'sm' | 'md' | 'lg' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
}

const sizes = {
  sm: 'xl',
  md: '2xl',
  lg: '4xl',
  '2xl': '5xl',
  '3xl': '6xl',
  '4xl': '7xl',
  '5xl': '8xl',
  '6xl': '9xl',
} as const

export const Heading = styled.h2<Props>`
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeights.base};
  margin: 0;
  color: ${(props) => props.theme.colors.gray100};

  font-size: ${(props) => props.theme.fontSizes[sizes.md]};

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.theme.fontSizes[sizes[props.size]]};
    `}
`

export interface HeadingProps extends ComponentProps<typeof Heading> {}
