import React, { forwardRef, LegacyRef, memo, ReactElement } from 'react'
import { useStyles } from './Button.styles'
import { ButtonProps } from './Button.types'

/******************************************************************************
 * Clickable and styled button that triggers function passed as prop on click.
 * @param {Appearance} [appearance=default] determines the theme of the button.
 * @param {string} children the text to add to children span element used as
 * button label.
 * @param {string | undefined} [dataTestId] id of the container element to be
 * used on tests as a way to query the component.
 * @param {boolean} [disabled] HTML Attribute, true if the button is dissabled.
 * @param {function} [onClick] Function to be triggered on click.
 * @returns {ReactElement} Button HTML element.
 *****************************************************************************/
const Button = memo(forwardRef(function Button({
  appearance = 'default',
  children,
  dataTestId,
  disabled,
  onClick
}: ButtonProps, ref: LegacyRef<HTMLButtonElement> | undefined): ReactElement {
  const classes = useStyles()
  const buttonAtrributes = {
    className: classes[`${appearance}_container`],
    disabled: disabled,
    onClick: onClick,
    ref: ref,
    'data-testid': dataTestId
  }
  return (
    <button {...buttonAtrributes}>
      <span>{children}</span>
    </button>
  )
}))

export default Button
