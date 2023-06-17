import styled from 'styled-components'

export const TextInputContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray900};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.gray900};
  display: flex;
  align-items: baseline;

  &:has(input:focus) {
    border-color: ${(props) => props.theme.colors.green300};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Prefix = styled.span`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.gray400};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`

export const Input = styled.input`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  background: transparent;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray400};
  }
`
