import React, { createElement, DetailedReactHTMLElement, forwardRef, HTMLAttributes, LegacyRef, memo, ReactElement } from 'react'
import { Color } from '../_types'
import { CSSinJS, TextSize, TextType } from '../_types/global'

import { useStyles } from './Text.styles'
import { TextProps } from './Text.types'

/******************************************************************************
 * @param {string} children String containing the text to be rendered.
 * @param {Color} color Specify color of text.
 * @param {CSSinJS} css Css properties to add.
 * @param {TextProps['element']} element HTML element that will wrap text.
 * @param {TextSize} size Natural number (can be negative) representing scale of
 * the font. 0 is the base size, -1 is one size smaller than base, 1 is one
 * size greater than base. If left blank size will be 0.
 * @param {CSSinJS['fontWeight']} weight. Specify weight from 100 to 900.
 * @returns {ReactElement<TextType>} Text element that will depend on props.
 * "h1"-"h6" headings, "p" paragraphs or span elements.
 *****************************************************************************/
const Text = memo(forwardRef((props: TextProps, ref: LegacyRef<TextType>):
  DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement> => {
  const {
    children,
    color,
    css,
    element,
    size = 0,
    weight = 'normal'
  } = props
  const classes = useStyles()

  /****************************************************************************
   * Gets the Text component prop "size" representing the size of the text as
   * an integer number and returns a string representing an HTML Heading
   * element to use with "createElement" method of React API.
   * @returns {'h1' | 'h2' | 'h3' | 'h4'} heading HTML Element
   ***************************************************************************/
  const getHeadingElement = (size: TextSize) => {
    switch(size) {
      case 5:
        return 'h1'
      case 4:
        return 'h2'
      case 3:
        return 'h3'
      case 2:
        return 'h4'
      default:
        return 'h4'
    }
  }

  /****************************************************************************
   * Gets the Text component prop "element" and inferes what type of HTML
   * elemnt to render.
   * @returns a string representing the HTML element to use with
   * "createElement" method of React API.
   ***************************************************************************/
  const getElement = (element: TextProps['element']) =>
    element === 'span'
      ? 'span'
      : element === 'paragraph'
        ? 'p'
        : size > 1
          ? getHeadingElement(size)
          : 'span'

  const attributes = {
    ...props,
    className: classes.default,
    ref: ref,
    style: {
      ...css,
      color: color,
      fontWeight: weight
    }
  }
  const htmlElement = getElement(element)
  return createElement(htmlElement, attributes, children)
}))

export default Text
