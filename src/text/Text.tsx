import React, { createElement, DetailedReactHTMLElement, forwardRef, HTMLAttributes, HTMLProps, LegacyRef, memo, ReactElement } from 'react'
import { typography_base, typography_ratio } from '../_styles'
import { Color } from '../_types'
import { CSSinJS, TextSize, TextType } from '../_types/global'

import { useStyles } from './Text.styles'
import { ElementTag, NewElementAttributes, TextProps } from './Text.types'

/******************************************************************************
 * @param {string} children String containing the text to be rendered.
 * @param {Color} color Specify color of text.
 * @param {CSSProperties} css Css properties to add.
 * @param {TextProps['element']} element HTML element that will wrap text.
 * @param {TextSize} size Natural number (can be negative) representing scale
 * of the font. 0 is the base size, -1 is one size smaller than base, 1 is one
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
    weight
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

  /****************************************************************************
   * Gets the size specified on props and returns the appropiate default
   * font-weight property for that text.
   * @param {TextProps['size']} size prop passed to Text component.
   * @returns {CSSinJS['fontWeight']} fontWeight property value.
   ***************************************************************************/
  const getWeight = (size: number) => {
    return (size <= 5 && size >= 1) || size === -2
      ? 700 
      : 'normal'
  }

  /******************************************************************************
   * @type {NewElementAttributes} Attributes to pass on createElement method.
   * @property {string} className of JSS style object used.
   * @property {LegacyRef<TextType>} ref ref forwarded from parent element.
   * @property {CSSinJS} style object containing extra css of the component.
   *****************************************************************************/
  const attributes: NewElementAttributes = {
    className: classes[size],
    ref: ref,
    style: {
      textAlign: element === 'paragraph' ? 'justify' : 'start',
      color: color,
      fontWeight: weight || getWeight(size),
      ...css
    }
  }

  /******************************************************************************
   * @type {ElementTag} The tag of the element as a string. Example: 'h1'.
   *****************************************************************************/
  const htmlElement: ElementTag = getElement(element)

  return createElement(htmlElement, attributes, children)
}))

export default Text
