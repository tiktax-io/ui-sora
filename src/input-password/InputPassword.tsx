import React, { forwardRef, LegacyRef, memo, useState } from 'react'
import Icon from '../icon/Icon'
import { IconProps } from '../icon/Icon.types'
import { black, danger, success } from '../_styles'

import { isInvalidStyle, isValidStyle, useStyles } from './InputPassword.styles'
import { InputPasswordProps } from './InputPassword.types'

/******************************************************************************
 * Functional Component that renders a text input completed with label and
 * optional validation styles and message.
 * @param {string} [dataTestId] id of the container element to be
 * used on tests as a way to query the component.
 * @param {string} feedbackMessage validation message to display below the
 * input field.
 * @param {boolean} isInvalid true if the input will display an error status.
 * @param {boolean} isValid true if the input will display a success status.
 * @param {string} label label title of the input.
 * @param {() => unknown} onChange function to trigger when input value changes.
 * @param {boolean} passwordIsHidden true by default. False to show password.
 * @param {string} placeholder string used as placeholder for user instructions.
 * @param {string} value the string value of the input for controlled forms.
 * @param {number} width integer representing the width in pixels.
 * @returns {ReactElement} Div containing text input, optionally label above,
 * and feedback message below.
 *****************************************************************************/
const InputPassword = memo(forwardRef(({
  dataTestId,
  feedbackMessage,
  isInvalid,
  isValid,
  label,
  onChange,
  passwordIsHidden = true,
  placeholder,
  value,
  width = 200
}: InputPasswordProps, ref?: LegacyRef<HTMLDivElement>) => {
  const classes = useStyles()
  const [passwordIsHiddenState, setPasswordIsHiddenState] =
    useState<boolean>(passwordIsHidden)

  const containerAttributes = {
    'data-testid': dataTestId,
    ref: ref,
    className: classes.container,
    style: { width: `${width}px` }
  }
  const feedbackIconProps: IconProps = {
    color: isInvalid ? danger : success,
    height: 16,
    icon: isInvalid ? 'danger' : 'success',
    width: 16
  }
  const iconContainerAttributes = {
    className: classes.iconContainer,
    'data-testid': `${dataTestId}IconContainer`,
    onClick: () => setPasswordIsHiddenState(!passwordIsHiddenState),
  }
  const iconProps: IconProps = {
    color: black,
    height: 14,
    icon: passwordIsHiddenState ? 'hide' : 'show',
    width: 18
  }
  const inputAttributes = {
    className: classes.inputElement,
    'data-testid': `${dataTestId}Input`,
    onChange: onChange,
    placeholder: placeholder,
    type: passwordIsHiddenState ? 'password' : 'text',
    value: value
  }
  const inputWrapperAttributes = {
    className: classes.inputWrapper,
    style: isInvalid ? isInvalidStyle : isValid ? isValidStyle : {}
  }
  const spanFeedbackMessageAttributes = {
    className: classes.feedbackMessageContainer,
    'data-testid': `${dataTestId}SpanFeedbackMessage`,
    style: {
      color: isInvalid ? danger : success
    }
  }

  return (
    <div {...containerAttributes}>
      {label && <span className={classes.label}>{label}</span>}
      <span {...inputWrapperAttributes}>
        <input {...inputAttributes} />
        <span {...iconContainerAttributes}>
          <Icon {...iconProps} />
        </span>
      </span>
      {(isInvalid || isValid) && <span {...spanFeedbackMessageAttributes}>
        <Icon {...feedbackIconProps} />
        <span className={classes.feedbackMessageText}>{feedbackMessage}</span>
      </span>}
    </div>
  )
}))

export default InputPassword
