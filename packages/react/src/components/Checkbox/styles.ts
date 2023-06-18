import styled, { keyframes } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root)`
  all: unset;
  width: ${(props) => props.theme.space[6]};
  height: ${(props) => props.theme.space[6]};
  background-color: ${(props) => props.theme.colors.gray900};
  border-radius: ${(props) => props.theme.radii.xs};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.gray900};

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.colors.green300};
  }

  &:focus,
  &[data-state='checked'] {
    border: 2px solid ${(props) => props.theme.colors.green300};
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme.colors.white};
  width: ${(props) => props.theme.space[4]};
  height: ${(props) => props.theme.space[4]};

  &[data-state='checked'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-out;
  }
`
