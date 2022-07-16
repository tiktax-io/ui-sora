import { Color } from '../_types'

export type IconName = 'dashboard' | 'time' | 'wallet' | 'integrations' | 'settings' | 'bell' | 'danger' | 'success'

export type IconPath = {
  color?: Color
}

export type IconProps = {
  color?: Color
  dataTestId?: string
  fill?: Color | 'none'
  icon: IconName
  height?: number
  size?: number
  title?: string
  viewBox?: string // viewBox="0 0 16 16"
  width?: number
}
