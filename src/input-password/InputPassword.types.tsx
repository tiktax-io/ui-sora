import { CSSProperties } from 'react'

/******************************************************************************
 * @property {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
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
 *****************************************************************************/
 export type InputPasswordProps = {
  css?: CSSProperties
  dataTestId?: string
  feedbackMessage?: string
  isInvalid?: boolean
  isValid?: boolean
  label?: string
  onChange?: () => unknown
  passwordIsHidden?: boolean
  placeholder?: string
  value?: string
  width?: number
}
