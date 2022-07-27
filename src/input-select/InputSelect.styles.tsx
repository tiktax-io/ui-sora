import { createUseStyles } from 'react-jss'
import { black, fontFamily, inputGlobalStyles, text, typography_scale } from '../_styles'
import { spacing_scale } from '../_styles/misc'
import { hexToRGB, shadeColor } from '../_utils/colors'

export const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: 'fit-content'
  },
  inputBox: {
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
  label: {
    color: shadeColor(black, 0.75),
    fontFamily: fontFamily,
    fontSize: typography_scale[3],
    fontWeight: 600
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
}

export const useStyles = createUseStyles(
  (theme) => ({ ...style, ...theme.InputSelect })
)
