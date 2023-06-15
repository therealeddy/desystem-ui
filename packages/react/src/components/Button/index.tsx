import styled, { css } from 'styled-components'

export type ButtonProps = {
  size?: 'small' | 'big'
}

export const Button = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.fonts.default};
  background-color: ${(props) => props.theme.colors.green300};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 0;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};

  ${(props) =>
    (!props.size || props.size === 'small') &&
    css`
      font-size: 14;
      padding: ${(props) => props.theme.space[2]}
        ${(props) => props.theme.space[4]};
    `}

  ${(props) =>
    props.size === 'big' &&
    css`
      font-size: 16;
      padding: ${(props) => props.theme.space[3]}
        ${(props) => props.theme.space[6]};
    `}
`
