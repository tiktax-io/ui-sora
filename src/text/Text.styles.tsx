import { createUseStyles } from 'react-jss'
import { fontFamily, text, typography_base, typography_scale } from '../_styles'
import { TextSize } from '../_types/global'

/******************************************************************************
 * @returns css properties of font size.
 *****************************************************************************/
const getFontSizeByBreakpoints = (size: TextSize) => {
  const defaultSize = typography_scale[size + 3]
  const css = {
    fontSize: defaultSize * 0.75,
    '@media (min-width: 768px)': {
      fontSize: defaultSize * 0.9
    },
    '@media (min-width: 1024px)': {
      fontSize: defaultSize * 0.95
    },
    '@media (min-width: 1366px)': {
      fontSize: defaultSize
    },
    '@media (min-width: 1920px)': {
      fontSize: defaultSize * 1.05
    }
  }
  return css
}

export const useStyles = createUseStyles({
  '-3': {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(-3)
  },
  '-2': {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(-2)
  },
  '-1': {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(-1)
  },
  0: {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(0)
  },
  1: {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(1)
  },
  2: {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(2)
  },
  3: {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(3)
  },
  4: {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(4)
  },
  5: {
    color: text,
    fontFamily: fontFamily,
    ...getFontSizeByBreakpoints(5)
  }
})
