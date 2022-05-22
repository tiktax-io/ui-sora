import { ReactChild } from 'react'

export type NavbarProps = {
  behaviour?: 'sticky' | 'scrollup' | 'scrollable'
  children?: ReactChild
  handleShowSidebar?: () => void
  hideToggle?: boolean
}

export type DashboardProps = {
  children: ReactChild
  navbarProps?: NavbarProps
  sidebar?: ReactChild
}

export type IconButtonProps = {
  appearance?: string // 'minimal',
  border?: string // 'none',
  'data-testid'?: string
  icon: unknown // MenuIcon,
  height: 40
  onClick: () => void
}
