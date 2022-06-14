import { ReactNode } from 'react'
import { NavbarProps } from '../navbar/Navbar.types'

export type DashboardProps = {
  children?: ReactNode
  dataTestId?: string
  displaySidebar?: boolean
  navbarProps?: NavbarProps
  sidebarChildren?: ReactNode
}
