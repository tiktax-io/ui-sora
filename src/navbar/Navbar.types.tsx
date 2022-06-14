import { ReactNode } from 'react'
import { Color } from '../_types'

export type HamburgerMenuProps = {
  color?: Color
  onClick?: () => void | undefined
}

export type NavbarProps = {
  children?: ReactNode
  color?: Color
  dataTestId?: string
  hasHamburgerMenu?: boolean
  onHamburgerMenuClick?: () => void | undefined
}
