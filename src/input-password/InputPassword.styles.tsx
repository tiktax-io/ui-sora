import { createUseStyles } from 'react-jss'
import { black, danger, fontFamily, inputGlobalStyles, primary, success, typography_scale } from '../_styles'
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
    background: 'none',
    border: 'none',
    height: '100%',
    letterSpacing: '0.23px',
    paddingLeft: inputGlobalStyles.container.paddingLeft,
    width: '100%',
    '&:focus': {
      outline: 'none'
    },
    '&::placeholder': {
      color: shadeColor(black, 0.33)
    }
  },
  iconContainer: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    paddingRight: inputGlobalStyles.container.paddingRight,
    width: '18px'
  },
  /****************************************************************************
   * inputWrapper is the span element wrapping the HTML Input with the
   * "visibility" toggle icon. It doesn't exist on InputText component.
   ***************************************************************************/
  inputWrapper: {
    ...inputGlobalStyles.container,
    alignItems: 'center',
    border: `1px solid ${hexToRGB(black, 0.1)}`,
    display: 'flex',
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  label: {
    color: shadeColor(black, 0.75),
    fontFamily: fontFamily,
    fontSize: typography_scale[3],
    fontWeight: 600
  }
}

export const useStyles = createUseStyles(
  (theme) => ({ ...style, ...theme.InputPassword })
)
