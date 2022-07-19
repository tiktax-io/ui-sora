import { CSSProperties } from 'react'

/******************************************************************************
 * @property {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
 * @property {string | number} defaultValue the default option selected on render.
 * @property {(value: string | number) => unknown | void} onChange action to trigger
 * when the selected option has been updated.
 * @property {Array<string>} options options of input of type select.
 *****************************************************************************/
export type InputSelectProps = {
  css?: CSSProperties
  defaultValue?: string | number
  onChange: (value: string | number) => unknown | void
  options: Array<string>
}
