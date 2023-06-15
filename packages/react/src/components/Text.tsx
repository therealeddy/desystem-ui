import { ElementType } from 'react'
import styled, { css } from 'styled-components'

export interface TextProps {
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  as?: ElementType
}

export const Text = styled.p<TextProps>`
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeights.base};
  margin: 0;
  color: ${(props) => props.theme.colors.gray100};

  font-size: ${(props) => props.theme.fontSizes.md};

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.theme.fontSizes[props.size]};
    `}
`
