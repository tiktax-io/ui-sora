import { ReactNode } from 'react'

export type RowDisplayOptions = 'rows' | 'cards'

/******************************************************************************
 * @param {Array<unknown>} children array containing all items to be rendered.
 * @param {RowDisplayOptions} displayAs determines if information will be
 * displayed as cards or rows.
 * @param {ReactNode} resultsMessage optional message explaining results.
 * @param {ReactNode} searchbar component to be wrapped inside searchbar on top
 * of cards.
 * @param {ReactNode} sidebar component to be wrapped inside sidebar.
 *****************************************************************************/
export type SearchResultsProps = {
  children: Array<ReactNode>
  displayAs?: RowDisplayOptions
  resultsMessage?: ReactNode
  searchbar?: ReactNode
  sidebar?: ReactNode
}
