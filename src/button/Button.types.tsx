import { ReactNode } from 'react'
import { Appearance } from '../_types'

export type ButtonProps = {
  appearance?: Appearance
  children: ReactNode
  dataTestId?: string
  disabled?: boolean
  onClick?: () => void
}
