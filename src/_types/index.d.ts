import { ReactChild } from 'react'
export declare type NavbarProps = {
  behaviour?: 'sticky' | 'scrollup' | 'scrollable'
  children?: ReactChild
  handleShowSidebar?: () => void
  hideToggle?: boolean
}
export declare type DashboardProps = {
  children: ReactChild
  navbarProps?: NavbarProps
  sidebar?: ReactChild
}
export declare type IconButtonProps = {
  appearance?: string
  border?: string
  'data-testid'?: string
  icon: unknown
  height: 40
  onClick: () => void
}
