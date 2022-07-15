import React, { ForwardedRef, forwardRef, memo, ReactNode } from 'react'
import { useStyles } from './SearchResults.styles'
import { RowDisplayOptions, SearchResultsProps } from './SearchResults.types'

/******************************************************************************
 * @param {Array<unknown>} children array containing all items to be rendered.
 * @param {RowDisplayOptions} displayAs determines if information will be
 * displayed as cards or rows.
 * @param {ReactNode} resultsMessage optional message explaining results.
 * @param {ReactNode} sidebar component to be wrapped inside sidebar.
 * @returns {ReactNode} Layout containing a side div and grid.
 *****************************************************************************/
const SearchResults = memo(forwardRef(({
  children,
  resultsMessage,
  sidebar
}: SearchResultsProps, ref: ForwardedRef<HTMLDivElement> | undefined) => {
  const classes = useStyles()
  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.sidebar}>
        {sidebar}
      </div>
      <div className={classes.mainContent}>
        <div className={classes.searchBar}>
          Searchbar here
        </div>
        <div className={classes.resultsMessage}>
          {resultsMessage}
        </div>
        <div className={classes.grid}>
          {children.map((element, i) => (
            <div className={classes.cardContainer} key={i}>{element}</div>
          ))}
        </div>
      </div>
    </div>
  )
}))

export default SearchResults
