import styled, { css } from 'styled-components'
import { Text } from '../Text'

export const MultiStepContainer = styled.div``

export const Label = styled(Text).attrs({
  size: 'xs',
})<any>`
  color: ${(props) => props.theme.colors.gray200};
`

interface StepsProps {
  stepsSize: number
}

export const Steps = styled.div<StepsProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.stepsSize}, 1fr)`};
  gap: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[1]};
`

interface StepProps {
  active: boolean
}

export const Step = styled.div<StepProps>`
  height: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.radii.px};
  background-color: ${(props) => props.theme.colors.gray600};

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.colors.gray100};
    `}
`
