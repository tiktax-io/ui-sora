import { AriaAttributes, ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps, DOMAttributes } from 'react'
import { CSSinJS } from './global'

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

export type Appearance = 'default' | 'primary' | 'success' | 'danger'
export type Color = RGB | RGBA | HEX
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
    /****************************************************************************
     * inputWrapper is the span element wrapping the HTML Input with the
     * "visibility" toggle icon. It doesn't exist on InputText component.
     ***************************************************************************/
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

export interface CustomHTMLAttributes {
  button?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-testid'?: string
    disabled?: boolean
  }
}

type LogoSize = 'sm' | 'm' | 'l' | 'xl'
export interface LogoProps {
  size?: LogoSize
}
