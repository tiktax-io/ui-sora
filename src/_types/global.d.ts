// global.d.ts
import { Color } from '../_types/index'

export type CSSinJS = {
  alignItems?: 'stretch' | 'start' | 'center' | 'end'
  background?: string
  border?: string
  borderBottom?: string
  boxShadow?: string
  color?: Color | string
  cursor?: 'help' | 'wait' | 'crosshair' | 'not-allowed' | 'zoom-in' | 'grab' | 'pointer'
  display?: 'flex' | 'block' | 'inline' | 'inline-block' | 'grid' | 'inline-grid'
  flex?: string
  gap?: number
  height?: string
  justifyContent?: string
  left?: number
  maxWidth?: string
  position?: string
  top?: number
  transition?: Array<Array<string>>
  width?: string
  '& aside'?: CSSinJS
  '& main'?: CSSinJS
  '&:hover'?: any
  '&:active'?: any
  '&:focus'?: any
  '& span'?: any
}

declare global {
  namespace Jss {
    export interface Theme {
      Button?: {
        default_container?: CSSinJS
        primary_container?: CSSinJS
        success_container?: CSSinJS
        danger_container?: CSSinJS
      },
      Dashboard?: {
        container?: CSSinJS
      }
      Navbar?: {
        container?: CSSinJS
        content?: CSSinJS
      }
    }
  }
}

export {}
