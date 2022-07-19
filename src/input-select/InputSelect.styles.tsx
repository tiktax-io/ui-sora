import { createUseStyles } from 'react-jss'
import { black, inputGlobalStyles, text } from '../_styles'
import { spacing_scale } from '../_styles/misc'
import { hexToRGB } from '../_utils/colors'

export const useStyles = createUseStyles({
  container: {
    ...inputGlobalStyles.container,
    background: 'white',
    border: `1px solid ${hexToRGB(black, 0.1)}`,
    cursor: 'pointer',
    outline: 'none',
    paddingLeft: `${spacing_scale[1]}px`,
    paddingRight: `${spacing_scale[1]}px`,
    width: 'fit-content',
    '&:focus-within': {
      ...inputGlobalStyles.container['&:focus-within'],
      background: 'white'
    }
  },
  select: {
    ...inputGlobalStyles.container,
    color: text,
    '&:focus-within': {
      border: 'none',
      boxShadow: 'none'
    },
    background: 'inherit',
    cursor: 'pointer',
    outline: 'none'
  },
  option: {
    background: 'white',
    color: text
  }
})
