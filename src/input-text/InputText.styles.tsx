import { createUseStyles } from 'react-jss'
import { black, danger, fontFamily, inputGlobalStyles, success, typography_scale } from '../_styles'
import { hexToRGB, shadeColor } from '../_utils/colors'

export const isInvalidStyle = {
  border: `1px solid ${danger}`,
  boxShadow: `0px 4px 10px 3px ${hexToRGB(danger, 0.25)}`
}

export const isValidStyle = {
  border: `1px solid ${success}`,
  boxShadow: `0px 4px 10px 3px ${hexToRGB(success, 0.25)}`
}

export const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px'
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
  inputElement: {
    ...inputGlobalStyles.container,
    border: `1px solid ${hexToRGB(black, 0.1)}`,
    letterSpacing: '0.23px',
    width: '100%',
    '&::placeholder': {
      color: shadeColor(black, 0.33)
    }
  },
  label: {
    color: shadeColor(black, 0.75),
    fontFamily: fontFamily,
    fontSize: typography_scale[3],
    fontWeight: 600
  }
}

export const useStyles = createUseStyles(
  (theme) => ({ ...style, ...theme.InputText })
)
