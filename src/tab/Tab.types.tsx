import { ReactNode } from 'react'

export type TabProps = {
  children?: ReactNode
  dataTestId?: string
  isSelected?: boolean
  onClick?: () => void
}
