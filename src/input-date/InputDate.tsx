import React, { ForwardedRef, forwardRef, HTMLProps, memo } from 'react'
import Icon from '../icon/Icon'
import { IconProps } from '../icon/Icon.types'
import { danger, success } from '../_styles'

import { isInvalidStyle, isValidStyle, useStyles } from './InputDate.styles'
import { InputDateProps } from './InputDate.types'

/******************************************************************************
 * Functional component that renders an input of type "date" element.
 * @param {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
 * @param {string} dataTestId id of the container element to be
 * used on tests as a way to query the component.
 * @param {string} feedbackMessage validation message to display below the
 * input field.
 * @param {boolean} isInvalid true if the input will display an error status.
 * @param {boolean} isValid true if the input will display a success status.
 * @param {string} label label title of the input.
 * @property {string} min oldest date available in range: 'YYYY-MM-DD'.
 * @property {string} max oldest date available in rangE: 'YYYY-MM-DD'.
 * the selected option has been updated.
 * @property {number} step integer number representing days.
 * @param {(value: string) => unknown | void} onChange action to trigger when
 * @param {string} value the default option selected on render.
 * @returns {ReactElement} Input of type select.
 *****************************************************************************/
const InputDate = memo(forwardRef(({
  css,
  dataTestId,
  feedbackMessage,
  isInvalid,
  isValid,
  label,
  min,
  max,
  onChange,
  step,
  value,
}: InputDateProps, ref: ForwardedRef<HTMLInputElement>) => {
  const classes = useStyles()

  const feedbackIconProps: IconProps = {
    color: isInvalid ? danger : success,
    height: 16,
    icon: isInvalid ? 'danger' : 'success',
    width: 16
  }

  /****************************************************************************
   * HTML attributes and props to be passed to input box.
   ***************************************************************************/
  const inputProps: HTMLProps<HTMLInputElement> = {
    className: classes.inputBox,
    placeholder: 'hey',
    ref: ref,
    style: {
      ...isInvalid ? isInvalidStyle : isValid ? isValidStyle : null,
      ...css
    },
    type: 'date'
  }

  const spanFeedbackMessageAttributes = {
    className: classes.feedbackMessageContainer,
    'data-testid': `${dataTestId}SpanFeedbackMessage`,
    style: {
      color: isInvalid ? danger : success
    }
  }

  return (
    <div className={classes.container}>
      {label && <label className={classes.label}>{label}</label>}
      <input {...inputProps} />
      {(isInvalid || isValid) && <span {...spanFeedbackMessageAttributes}>
        <Icon {...feedbackIconProps} />
        <span className={classes.feedbackMessageText}>{feedbackMessage}</span>
      </span>}
    </div>
  )
}))

export default InputDate
