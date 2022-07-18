import React from 'react'

import { useStyles } from './Text.styles'
import { TextProps } from './Text.types'

const Text = ({ children }: TextProps) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default Text
