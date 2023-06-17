import styled from 'styled-components'
import { ComponentProps } from 'react'

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.gray900};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.gray900};

  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: 0;
    border-color: ${(props) => props.theme.colors.green300};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray400};
  }
`

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
