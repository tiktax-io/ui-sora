// global.d.ts
import { Color } from '../_types/index'

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset'

export type CSSinJS = {
  alignItems?: 'stretch' | 'start' | 'center' | 'end'
  background?: string
  border?: string
  borderBottom?: string
  borderRadius?: string
  boxShadow?: string
  color?: Color | string
  cursor?: 'help' | 'wait' | 'crosshair' | 'not-allowed' | 'zoom-in' | 'grab' | 'pointer' | 'text'
  display?: 'flex' | 'block' | 'inline' | 'inline-block' | 'grid' | 'inline-grid'
  flex?: string
  flexDirection?: FlexDirection
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'bolder' | 'lighter'
  gap?: string
  height?: string
  justifyContent?: string
  left?: number
  letterSpacing?: string
  maxWidth?: string
  outline?: string
  padding?: string
  paddingLeft?: string
  paddingRight?: string
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
  top?: number
  transition?: Array<Array<string>>
  width?: string
  '&:active'?: CSSinJS
  '& aside'?: CSSinJS
  '&:focus'?: CSSinJS
  '&:focus-within'?: CSSinJS
  '&:hover'?: CSSinJS
  '& main'?: CSSinJS
  '&::placeholder'?: CSSinJS
  '& span'?: CSSinJS
}

declare global {
  namespace Jss {
    export interface Theme {
      Button?: {
        default_container?: CSSinJS
        primary_container?: CSSinJS
        success_container?: CSSinJS
        danger_container?: CSSinJS
      }
      Dashboard?: {
        container?: CSSinJS
      }
      InputText?: {
        container?: CSSinJS
        feedbackMessageContainer?: CSSinJS
        feedbackMessageText?: CSSinJS
        inputElement?: CSSinJS
        label?: CSSinJS
      }
      InputDate?: {
        container?: CSSinJS
        feedbackMessageContainer?: CSSinJS
        feedbackMessageText?: CSSinJS
        inputBox?: CSSinJS
        label?: CSSinJS
      }
      InputPassword?: {
        container?: CSSinJS
        feedbackMessageContainer?: CSSinJS
        feedbackMessageText?: CSSinJS
        inputElement?: CSSinJS
        iconContainer?: CSSinJS
        /**********************************************************************
         * inputWrapper is the span element wrapping the HTML Input with the
         * "visibility" toggle icon. It doesn't exist on InputText component.
         *********************************************************************/
        inputWrapper?: CSSinJS
        label?: CSSinJS
      }
      InputSelect?: {
        container?: CSSinJS
        inputBox?: CSSinJS
        label?: CSSinJS
        option?: CSSinJS
        select?: CSSinJS
      }
      Navbar?: {
        container?: CSSinJS
        content?: CSSinJS
      }
      Tab?: {
        container?: CSSinJS
        selectedContainer?: CSSinJS
      }
    }
  }
}

export type TextSize = -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5

export type TextType = HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement

export {}
