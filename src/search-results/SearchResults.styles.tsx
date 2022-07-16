import { createUseStyles } from 'react-jss'
import { fontFamily, typography_base } from '../_styles'

export const useStyles = createUseStyles({
  cardContainer: {
    minWidth: '300px',
    width: '100%'
  },
  container: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1255px',
    width: '100%'
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'space-between',
    width: '100%'
  },
  mainContent: {
    width: '100%'
  },
  resultsMessage: {
    fontFamily: fontFamily,
    fontSize: typography_base,
    marginBottom: '30px'
  },
  searchBar: {
    minHeight: '92px',
    marginBottom: '45px',
    width: '100%'
  },
  sidebar: {
    maxWidth: '398px',
    width: '100%'
  },
  '@media (min-width: 768px)': {
    sidebar: {
      flex: 1
    },
    mainContent: {
      flex: 1.5
    }
  },
  '@media (min-width: 1260px)': {
    cardContainer: {
      flex: 1
    },
    mainContent: {
      flex: 'grow'
    }
  }
})
