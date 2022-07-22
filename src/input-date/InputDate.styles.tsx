import { createUseStyles } from 'react-jss'
import { black, danger, fontFamily, inputGlobalStyles, success, text, typography_scale } from '../_styles'
import { spacing_scale } from '../_styles/misc'
import { hexToRGB, shadeColor } from '../_utils/colors'

export const isInvalidStyle = {
  border: `1px solid ${danger}`,
  boxShadow: `0px 4px 10px 3px ${hexToRGB(danger, 0.25)}`
}

export const isValidStyle = {
  border: `1px solid ${success}`,
  boxShadow: `0px 4px 10px 3px ${hexToRGB(success, 0.25)}`
}

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: 'fit-content'
  },
  feedbackMessageContainer: {
    alignItems: 'center',
    display: 'flex',
    gap: '10px'
  },
  feedbackMessageText: {
    fontFamily: fontFamily,
    fontSize: typography_scale[2],
    letterSpacing: '0.23px'
  },
  inputBox: {
    ...inputGlobalStyles.container,
    background: 'white',
    border: `1px solid ${hexToRGB(black, 0.1)}`,
    color: text,
    cursor: 'text',
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
  }
})
