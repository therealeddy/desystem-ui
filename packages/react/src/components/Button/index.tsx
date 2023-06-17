import styled, { css } from 'styled-components'
import { ComponentProps } from 'react'

interface DefaultProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'tertiary'
  disabled?: boolean
}

export const Button = styled.button<DefaultProps>`
  all: unset;
  border-radius: ${(props) => props.theme.radii.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-family: ${(props) => props.theme.fonts.default};
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  padding: 0 ${(props) => props.theme.space[4]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[2]};

  cursor: pointer;

  svg: {
    width: ${(props) => props.theme.space[4]};
    height: ${(props) => props.theme.space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) =>
    (!props.variant || props.variant === 'primary') &&
    css`
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.green500};

      &:not(:disabled):hover {
        background: ${(props) => props.theme.colors.green300};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.gray200};
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      color: ${(props) => props.theme.colors.green300};
      border: 2px solid ${(props) => props.theme.colors.green500};

      &:not(:disabled):hover {
        background: ${(props) => props.theme.colors.green500};
        color: ${(props) => props.theme.colors.white};
      }

      &:disabled {
        color: ${(props) => props.theme.colors.gray200};
        border-color: ${(props) => props.theme.colors.gray200};
      }
    `}

  ${(props) =>
    props.variant === 'tertiary' &&
    css`
      color: ${(props) => props.theme.colors.gray100};

      &:not(:disabled):hover {
        color: ${(props) => props.theme.colors.white};
      }

      &:disabled {
        color: ${(props) => props.theme.colors.gray600};
      }
    `}

  ${(props) =>
    props.size === 'sm' &&
    css`
      height: 38px;
    `}
    
  ${(props) =>
    (!props.size || props.size === 'md') &&
    css`
      height: 46px;
    `}
`

export interface ButtonProps extends ComponentProps<typeof Button> {}
