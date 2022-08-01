import { CSSProperties } from 'react'

/******************************************************************************
 * @property {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
 * @param {string} [dataTestId] id of the container element to be
 * used on tests as a way to query the component.
 * @param {boolean} [disabled] HTML attribute of disabled input.
 * @param {string} feedbackMessage validation message to display below the
 * input field.
 * @param {boolean} isInvalid true if the input will display an error status.
 * @param {boolean} isValid true if the input will display a success status.
 * @param {string} label label title of the input.
 * @param {(value?: string) => unknown} onChange function to trigger when input value changes.
 * @param {string} placeholder string used as placeholder for user instructions.
 * @param {boolean} readOnly HTML attribute of readonly input.
 * @param {string} value the string value of the input for controlled forms.
 * @param {number} width integer representing the width in pixels.
 *****************************************************************************/
 export type InputPasswordProps = {
  css?: CSSProperties
  dataTestId?: string
  disabled?: boolean
  feedbackMessage?: string
  isInvalid?: boolean
  isValid?: boolean
  label?: string
  onChange?: (value?: string) => unknown
  placeholder?: string
  readOnly?: boolean
  value?: string
  width?: number
}
