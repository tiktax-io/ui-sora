import React, {
  forwardRef,
  LegacyRef,
  memo,
  ReactElement
} from 'react'
import { useStyles } from './Tab.styles'
import { TabProps } from './Tab.types'

/******************************************************************************
 * @param {ReactNode} children elements to render inside Navbar container.
 * @param {string} dataTestId string to identify by id on tests. "data-testid".
 * @param {boolean} isSelected true if the tab is selected.
 * @param {() => void} onClick triggers function on click.
 * @returns ReactElement.
 *****************************************************************************/
const Tab = memo(forwardRef(({
  children,
  dataTestId,
  isSelected,
  onClick
}: TabProps, ref: LegacyRef<HTMLAnchorElement> | undefined): ReactElement => {
  const classes = useStyles()
  const tabAttributes = {
    className: isSelected ? classes.selectedContainer : classes.container,
    'data-testid': dataTestId,
    onClick: onClick,
    ref: ref,
    role: 'button',
    tabIndex: 0
  }

  return (
    <a {...tabAttributes}>
      {children}
    </a>
  )
}))

export default Tab
