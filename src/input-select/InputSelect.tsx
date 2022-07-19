import React, { HTMLAttributes, ReactElement } from 'react'

import { useStyles } from './InputSelect.styles'
import { InputSelectProps } from './InputSelect.types'

/******************************************************************************
 * @returns {ReactElement} Input of type select.
 *****************************************************************************/
const InputSelect = ({
  children
}: InputSelectProps) => {
  const classes = useStyles()
  const containerProps: HTMLAttributes<HTMLDivElement> = {
    className: classes.container,
  }
  const selectProps: HTMLAttributes<HTMLSelectElement> = {
    className: classes.select,
    id: 'coins'
  }

  return (
    <div {...containerProps}>
      <select {...selectProps}>
        <option className={classes.option} value='bitcoin'>Bitcoin</option>
        <option className={classes.option} value='ethereum'>Ethereum</option>
        <option className={classes.option} value='cardano'>Cardano</option>
      </select>
    </div>
  )
}

export default InputSelect
