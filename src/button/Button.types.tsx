import { Appearance } from '../_types'

export type ButtonProps = {
  appearance?: Appearance
  children: string
  dataTestId?: string
  disabled?: boolean
  onClick?: () => void
}
