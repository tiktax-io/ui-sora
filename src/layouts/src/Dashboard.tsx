/* eslint-disable react/prop-types */
import React, { memo, forwardRef, Ref, ReactElement, useState } from 'react'
import { createUseStyles } from 'react-jss'
import styles from './Dashboard.styles'
import { Navbar } from '../../navbar'
import { DashboardProps, NavbarProps } from '../../_types'

/******************************************************************************
 * A layout wrapper in the form of a Dashboard. A left fixed div where
 * navigation elements can be rendered. On mobile hamburger menu will render
 * the side div. On narrow screens the side div has the enough width to render
 * icons instead of full nav tabs.
 * @param {DashboardProps} props
 * @param {ref} ref
 * @returns {ReactElement} Functional component, returns elements to render.
 *****************************************************************************/
const Dashboard: React.FC<DashboardProps> = memo(
  forwardRef((props: DashboardProps, ref: Ref<HTMLDivElement>): ReactElement => {
    const { ...restProps } = props
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    const [showSidebar, setShowSideBar] = useState(true)

    const navbarProps: NavbarProps = {
      handleShowSidebar: () => setShowSideBar(!showSidebar),
      behaviour: 'sticky',
      ...props.navbarProps,
    }

    const leftSideProps = {
      'data-testid': 'dashboard-leftside',
      className: classes.leftSide,
    }

    return (
      <div className={classes.back} ref={ref} {...restProps}>
        <Navbar {...navbarProps} />
        {showSidebar && (
          <>
            <aside {...leftSideProps}>{props.sidebar}</aside>
          </>
        )}
        <main className={classes.rightSide}>{props.children}</main>
      </div>
    )
  })
)

export default Dashboard
