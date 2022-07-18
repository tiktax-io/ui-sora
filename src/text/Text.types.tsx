import { CSSProperties } from 'react'
import { Color } from '../_types'
import { CSSinJS, TextSize, TextType } from '../_types/global'

/******************************************************************************
 * @param {string} children String containing the text to be rendered.
 * @param {Color} color Specify color of text.
 * @param {CSSProperties} css Css properties to add.
 * @param {'span' | 'paragraph' | 'heading'} element Specify type of element
 * that will wrap text.
 * @param {TextSize} size Natural number (can be negative) representing scale of
 * the font. 0 is the base size, -1 is one size smaller than base, 1 is one
 * size greater than base. If left blank size will be 0.
 * @param {CSSinJS['fontWeight']} weight. Specify weight from 100 to 900.
 *****************************************************************************/
export type TextProps = {
  children: string
  color?: Color
  css?: CSSProperties
  element?: 'span' | 'paragraph' | 'heading'
  size?: TextSize
  weight?: CSSinJS['fontWeight']
}
