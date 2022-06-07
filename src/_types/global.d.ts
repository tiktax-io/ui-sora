// global.d.ts
import { Color } from '../_types/index'

export type CSSinJS = {
  background?: string
  border?: string
  color?: Color | string
  cursor?: 'help' | 'wait' | 'crosshair' | 'not-allowed' | 'zoom-in' | 'grab' | 'pointer'
  transition?: Array<Array<string>>
  alignItems?: 'stretch' | 'start' | 'center' | 'end'
  boxShadow?: string
  display?: 'flex' | 'block' | 'inline' | 'inline-block' | 'grid' | 'inline-grid'
  gap?: number
  height?: string
  justifyContent?: string
  left?: number
  position?: string
  top?: number
  width?: string
  maxWidth?: string
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
      Navbar?: {
        container?: CSSinJS
        content?: CSSinJS
      }
    }
  }
}

export {}
