import React, { HTMLAttributes, HTMLProps, ReactElement, useState } from 'react'

import { useStyles } from './InputSelect.styles'
import { InputSelectProps } from './InputSelect.types'

/******************************************************************************
 * Functional component that takes array of options and render an HTML Select
 * element.
 * @param {CSSProperties} css CSS properties to add to the div wrapping the
 * element.
 * @param {string | number} defaultValue the default option selected on render.
 * @property {(value: string | number) => unknown | void} onChange action to
 * trigger when the selected option has been updated.
 * @param {Array<SelectOption>} options options of input of type select.
 * @returns {ReactElement} Input of type select.
 *****************************************************************************/
const InputSelect = ({
  css,
  onChange,
  options,
  defaultValue = options[0]
}: InputSelectProps): ReactElement => {
  const classes = useStyles()
  const containerProps: HTMLAttributes<HTMLDivElement> = {
    className: classes.container,
    style: css
  }
  const selectProps: HTMLProps<HTMLSelectElement> = {
    className: classes.select,
    id: 'coins',
    onChange: (event) => {
      event.preventDefault()
      onChange((event.target as HTMLInputElement).value)
    },
    value: defaultValue
  }

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
}

export default InputSelect
