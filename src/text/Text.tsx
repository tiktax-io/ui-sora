import React, { ReactElement } from 'react'
import { TextType } from '../_types/global'

import { useStyles } from './Text.styles'
import { TextProps } from './Text.types'

/******************************************************************************
 * @param {string} children String containing the text to be rendered.
 * @param {Color} color Specify color of text.
 * @param {CSSinJS} css Css properties to add.
 * @param {TextSize} size Natural number (can be negative) representing scale of
 * the font. 0 is the base size, -1 is one size smaller than base, 1 is one
 * size greater than base. If left blank size will be 0.
 * @param {CSSinJS['fontWeight']} weight. Specify weight from 100 to 900.
 * @returns {ReactElement} Text element that will depend on props. "h1"-"h6"
 * headings, "p" paragraphs or span elements.
 *****************************************************************************/
const Text = ({ children }: TextProps): ReactElement<TextType> => {
  const classes = useStyles()
  return (
    <span>
      {children}
    </span>
  )
}

export default Text
