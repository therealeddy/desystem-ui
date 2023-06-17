import React, { ElementType } from 'react'

export interface BaseComponent {
  children?: React.ReactNode
  as?: ElementType
}
