import React, { ForwardedRef, forwardRef, memo, useEffect, useState } from 'react'
import { useStyles } from './Navbar.styles'
import { HamburgerMenuProps, NavbarProps } from './Navbar.types'

/******************************************************************************
 * @returns Icon with the 3 horizontal lines representing a clickable menu.
 *****************************************************************************/
const HamburgerMenu = ({
  onClick
}: HamburgerMenuProps) => (
  <span onClick={onClick} style={{ cursor: 'pointer', width: '30px' }}>
    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>HamburgerMenu</title>
      <path d="M0 2.14286C0 0.959597 0.959598 -9.53674e-07 2.14286 -9.53674e-07H27.8571C29.0424 -9.53674e-07 30 0.959597 30 2.14286C30 3.32812 29.0424 4.28571 27.8571 4.28571H2.14286C0.959598 4.28571 0 3.32812 0 2.14286ZM0 12.8571C0 11.6719 0.959598 10.7143 2.14286 10.7143H27.8571C29.0424 10.7143 30 11.6719 30 12.8571C30 14.0424 29.0424 15 27.8571 15H2.14286C0.959598 15 0 14.0424 0 12.8571ZM27.8571 25.7143H2.14286C0.959598 25.7143 0 24.7567 0 23.5714C0 22.3862 0.959598 21.4286 2.14286 21.4286H27.8571C29.0424 21.4286 30 22.3862 30 23.5714C30 24.7567 29.0424 25.7143 27.8571 25.7143Z" fill="#686868"/>
    </svg>
  </span>
)

/******************************************************************************
 * @returns {ReactElement} HTML Header element wrapping content.
 * @see https://www.figma.com/file/GQCJ1nVFWevddz10mxmcgP/ui-sora?node-id=749%3A712
 *****************************************************************************/
const Navbar = memo(forwardRef(function({
  children,
  dataTestId,
  hasHamburgerMenu,
  onHamburgerMenuClick
}: NavbarProps, ref: ForwardedRef<HTMLElement> | undefined) {
  const { innerWidth } = window
  const [width, setWidth] = useState(innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const classes = useStyles()

  const ifHasHamburgerMenu = (hasHamburgerMenu !== false) && width < 1280 ||
    hasHamburgerMenu === true

  const hamburgerIconProps = {
    onClick: onHamburgerMenuClick
  }

  return (
    <header className={classes.container} data-testid={dataTestId} ref={ref}>
      <div className={classes.content}>
        {ifHasHamburgerMenu && <HamburgerMenu {...hamburgerIconProps} />}
        {children}
      </div>
    </header>
  )
}))

export default Navbar
