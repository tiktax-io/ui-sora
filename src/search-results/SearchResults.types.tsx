import { ReactNode } from 'react'

export type RowDisplayOptions = 'rows' | 'cards'

export type SearchResultsProps = {
  children: Array<ReactNode>
  displayAs?: RowDisplayOptions
}
