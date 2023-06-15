import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@desystem-ui/react'

type Props = StoryObj<ButtonProps>

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: Props = {}

export const Big: Props = {
  args: {
    size: 'big',
  },
}
