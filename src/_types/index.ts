export type NavbarProps = {
  behaviour?: 'sticky' | 'scrollup' | 'scrollable'
  handleShowSidebar?: () => void
  hideToggle?: boolean
}

export type DashboardProps = {
  children: unknown
  navbarProps?: NavbarProps
  sidebar?: unknown
}

export type IconButtonProps = {
  appearance?: string // 'minimal',
  border?: string // 'none',
  icon: unknown // MenuIcon,
  height: 40
  onClick: () => void
}
