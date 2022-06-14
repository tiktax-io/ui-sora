import React, { ForwardedRef, forwardRef, memo, ReactElement, useEffect, useState } from 'react'
import { Navbar } from '../index'
import { useStyles } from './Dashboard.styles'
import { DashboardProps } from './Dashboard.types'

/******************************************************************************
 * Functional Component, it renders a layout for a Dashboard with vertical
 * sidebar with navigation elements.
 * @param {ReactNode} children all element/s to render that are not part of the
 * sidebar or navbar.
 * @param {boolean} displaySidebar true if sidebar should be displayed, false
 * @param {ReactNode} navbarProps
 * @param {ReactNode} sidebarChildren
 * to hide it.
 * @returns {ReactElement} Functional component
 *****************************************************************************/
const Dashboard = memo(forwardRef(function({
  children,
  dataTestId,
  displaySidebar,
  navbarProps,
  sidebarChildren
}: DashboardProps, ref: ForwardedRef<HTMLDivElement> | undefined) {
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const [width, setWidth] = useState(window.innerWidth)
  const ifDisplaysSidebar = (displaySidebar !== false) && width > 1280 ||
    displaySidebar === true
  const [renderSidebar, setRenderSidebar] = useState(ifDisplaysSidebar)
  const classes = useStyles()
  const containerProps = {
    className: classes.container,
    'data-testid': dataTestId,
    ref: ref
  }
  const allNavbarProps = {
    onHamburgerMenuClick: () => {
      setRenderSidebar(!renderSidebar)
      navbarProps?.onHamburgerMenuClick
    },
    ...navbarProps
  }

  return (
    <div {...containerProps}>
      <Navbar {...allNavbarProps} />
      {renderSidebar &&
      <aside>
        {sidebarChildren}
      </aside>}
      <main>
        {children}
      </main>
    </div>
  )
}))

export default Dashboard
