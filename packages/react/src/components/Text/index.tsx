import styled, { css } from 'styled-components'
import { ComponentProps } from 'react'

interface DefaultProps {
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
}

export const Text = styled.p<DefaultProps>`
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

export interface TextProps extends ComponentProps<typeof Text> {}
