import { CSSProperties, HTMLProps } from 'react'

/******************************************************************************
 * @property {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
 * @param {string} [dataTestId] id of the container element to be
 * used on tests as a way to query the component.
 * @property {string} defaultValue the default option selected on render.
 * @property {(value: string) => unknown | void} onChange action to trigger
 * when the selected option has been updated.
 * @property {Array<string>} options options of input of type select.
 *****************************************************************************/
export type InputSelectProps = {
  css?: CSSProperties
  dataTestId?: string
  defaultValue?: string
  onChange: (value: string) => unknown | void
  options: Array<string>
}

/******************************************************************************
 * Set of attributes that can be passed into HTML Select element.
 * @property {string} 'data-testid' custom name for tesing querying purposes.
 *****************************************************************************/
export interface SelectAttributes extends HTMLProps<HTMLSelectElement> {
  'data-testid'?: string
}
