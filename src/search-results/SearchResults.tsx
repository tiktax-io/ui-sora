import React, { forwardRef, memo, ReactNode } from 'react'
import { useStyles } from './SearchResults.styles'
import { RowDisplayOptions, SearchResultsProps } from './SearchResults.types'

/******************************************************************************
 * @param {Array<unknown>} children array containing all items to be rendered.
 * @param {RowDisplayOptions} displayAs determines if information will be
 * displayed as cards or rows.
 * @param {ReactNode} sidebar component to be wrapped inside sidebar.
 * @returns {ReactNode} Layout containing a side div and grid.
 *****************************************************************************/
const SearchResults = memo(forwardRef(({
  children
}: SearchResultsProps) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {children.map((element, i) => <div key={i}>{element}</div>)}
    </div>
  )
}))

export default SearchResults
