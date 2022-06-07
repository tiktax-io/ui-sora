import { ReactNode } from 'react'

export type HamburgerMenuProps = {
  onClick?: () => void | undefined
}

export type NavbarProps = {
  children?: ReactNode
  dataTestId?: string
  hasHamburgerMenu?: boolean
  onHamburgerMenuClick?: () => void | undefined
}
