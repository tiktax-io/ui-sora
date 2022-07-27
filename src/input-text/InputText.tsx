import React, { ChangeEvent, forwardRef, LegacyRef, memo } from 'react'
import Icon from '../icon/Icon'
import { IconProps } from '../icon/Icon.types'
import { danger, success } from '../_styles'

import { isInvalidStyle, isValidStyle, useStyles } from './InputText.styles'
import { InputTextProps } from './InputText.types'

/******************************************************************************
 * Functional Component that renders a text input completed with label and
 * optional validation styles and message.
 * @property {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
 * @param {string} [dataTestId] id of the container element to be
 * used on tests as a way to query the component.
 * @param {string} feedbackMessage validation message to display below the
 * input field.
 * @param {boolean} isInvalid true if the input will display an error status.
 * @param {boolean} isValid true if the input will display a success status.
 * @param {string} label label title of the input.
 * @param {onChange?: (value: string) => unknown} onChange function to trigger
 * when input value changes.
 * @param {string} placeholder string passed to HTML input placeholder.
 * @param {string} value the string value of the input for controlled forms.
 * @param {number} width integer representing the width in pixels.
 * @returns {ReactElement} Div containing text input, optionally label above,
 * and feedback message below.
 *****************************************************************************/
const InputText = memo(forwardRef(({
  css,
  dataTestId,
  feedbackMessage,
  isInvalid,
  isValid,
  label,
  onChange,
  placeholder,
  value,
  width = 200
}: InputTextProps, ref?: LegacyRef<HTMLDivElement>) => {
  const classes = useStyles()

  /****************************************************************************
   * Attributes passed to top div element wrapping the component.
   * @property {string} dataTestId string to identify by id on tests.
   ***************************************************************************/
  const containerAttributes = {
    className: classes.container,
    'data-testid': dataTestId,
    ref: ref,
    style: { width: `${width}px`, ...css }
  }

  /****************************************************************************
   * Attributes passed input HTML element.
   * @property {string} dataTestId string to identify by id on tests.
   ***************************************************************************/
  const inputAttributes = {
    className: classes.inputElement,
    'data-testid': `${dataTestId}Input`,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      onChange && onChange((event?.target as HTMLInputElement)?.value || '')
    },
    placeholder: placeholder,
    style: isInvalid ? isInvalidStyle : isValid ? isValidStyle : {},
    type: 'text',
    value: value
  }

  /****************************************************************************
   * Attributes passed to Icon component displayed below input on feedback.
   * @property {Color} color string as Color
   * @property {string} dataTestId string to identify by id on tests.
   ***************************************************************************/
   const feedbackIconProps: IconProps = {
    color: isInvalid ? danger : success,
    height: 16,
    icon: isInvalid ? 'danger' : 'success',
    width: 16
  }

/******************************************************************************
 * Attributes passed to HTML Span element containing the feedback message.
 * @property {string} dataTestId string to identify by id on tests.
 *****************************************************************************/
  const spanFeedbackMessageAttributes = {
    className: classes.feedbackMessageContainer,
    'data-testid': `${dataTestId}SpanFeedbackMessage`,
    style: {
      color: isInvalid ? danger : success
    }
  }

  return (
    <div {...containerAttributes}>
      {label && <label className={classes.label}>{label}</label>}
      <input {...inputAttributes} />
      {(isInvalid || isValid) && <span {...spanFeedbackMessageAttributes}>
        <Icon {...feedbackIconProps} />
        <span className={classes.feedbackMessageText}>{feedbackMessage}</span>
      </span>}
    </div>
  )
}))

export default InputText
