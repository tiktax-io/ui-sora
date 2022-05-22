/* eslint-disable react/prop-types */
import React, { memo, forwardRef, Ref } from 'react'
import { createUseStyles } from 'react-jss'
import styles from './Navbar.styles'
import { IconButton } from '../../buttons'
import { MenuIcon } from '../../icons'
import { IconButtonProps, NavbarProps } from '../../_types'

/******************************************************************************
 * A layout wrapper in the form of a Dashboard. A left fixed div where
 * navigation elements can be rendered. On mobile hamburger menu will render
 * the side div. On narrow screens the side div has the enough width to render
 * icons instead of full nav tabs.
 * @param {unknown} props
 * @param {ref} ref
 * @returns {ReactElement} Functional component, returns elements to render.
 *****************************************************************************/
const Navbar = memo(
  forwardRef((props: NavbarProps, ref: Ref<HTMLDivElement>) => {
    // const { ...restProps } = props
    const useStyles = createUseStyles(styles(props))
    const classes = useStyles()
    const iconButtonProps: IconButtonProps = {
      appearance: 'minimal',
      border: 'none',
      'data-testid': 'navbar-hamburger-menu',
      icon: MenuIcon,
      height: 40,
      onClick: () => (props.handleShowSidebar ? props.handleShowSidebar() : null),
    }

    return (
      <div className={classes.navbar} ref={ref}>
        <div className={classes.navbarContainer}>{!props.hideToggle && <IconButton {...iconButtonProps} />}</div>
      </div>
    )
  })
)

export default Navbar
