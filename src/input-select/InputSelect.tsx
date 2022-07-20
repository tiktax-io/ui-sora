import React, { ChangeEvent, forwardRef, HTMLProps, LegacyRef, memo, ReactElement } from 'react'

import { useStyles } from './InputSelect.styles'
import { InputSelectProps, SelectAttributes } from './InputSelect.types'

/******************************************************************************
 * Functional component that takes array of options and render an HTML Select
 * element.
 * @param {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
 * @param {string} [dataTestId] id of the container element to be
 * used on tests as a way to query the component.
 * @param {string} defaultValue the default option selected on render.
 * @property {(value: string) => unknown | void} onChange action to
 * trigger when the selected option has been updated.
 * @param {Array<SelectOption>} options options of input of type select.
 * @returns {ReactElement} Input of type select.
 *****************************************************************************/
const InputSelect = memo(forwardRef(({
  css,
  dataTestId,
  onChange,
  options,
  defaultValue = options[0]
}: InputSelectProps, ref?: LegacyRef<HTMLDivElement>): ReactElement => {
  const classes = useStyles()

  /****************************************************************************
   * HTML attributes and props to be passed to Top parent div element.
   ***************************************************************************/
  const containerProps: HTMLProps<HTMLDivElement> = {
    className: classes.container,
    ref: ref,
    style: css
  }

  /******************************************************************************
   * Attributes that can be passed into HTML Select element.
   *****************************************************************************/
  const selectProps: SelectAttributes = {
    className: classes.select,
    'data-testid': dataTestId,
    id: 'coins',
    onChange: (event: ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault()
      onChange((event.target as HTMLSelectElement).value)
    },
    value: defaultValue
  }

  /******************************************************************************
   * Infer attributes to pass to specific option element.
   * @param {string} option string containing the value of the option.
   * @returns {HTMLProps<HTMLOptionElement>} option element attributes.
   *****************************************************************************/
  const getOptionAttributes = (option: string):
    HTMLProps<HTMLOptionElement> => {
    const attributes: HTMLProps<HTMLOptionElement> = {
      className: classes.option,
      value: option
    }
    return attributes
  }

  return (
    <div {...containerProps}>
      <select {...selectProps}>
        {options.map((option: string, i) => (
          <option key={i} {...getOptionAttributes(option)}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}))

export default InputSelect
