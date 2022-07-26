import { CSSProperties } from 'react'

/******************************************************************************
 * Functional component that renders an input of type "date" element.
 * @property {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
 * @property {string} dataTestId id of the container element to be
 * used on tests as a way to query the component.
 * @param {string} feedbackMessage validation message to display below the
 * input field.
 * @property {boolean} isInvalid true if the input will display an error status.
 * @property {boolean} isValid true if the input will display a success status.
 * @property {string} value the default option selected on render.
 * @property {string} label label title of the input.
 * @property {(value: string) => unknown | void} onChange action to trigger
 * when the selected option has been updated.
 * @property {string} min oldest date available in range: 'YYYY-MM-DD'.
 * @property {string} max oldest date available in rangE: 'YYYY-MM-DD'.
 * @property {number} step integer number representing days.
 * @returns {ReactElement} Input of type select.
 *****************************************************************************/
export type InputDateProps = {
  css?: CSSProperties
  dataTestId?: string
  feedbackMessage?: string
  isInvalid?: boolean
  isValid?: boolean
  label?: string
  min?: string
  max?: string
  onChange: (value: any) => unknown | void
  step?: number
  value?: string
}
