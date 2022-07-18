import { createUseStyles } from 'react-jss'
import { fontFamily, text, typography_base } from '../_styles'

export const useStyles = createUseStyles({
  default: {
    color: text,
    fontFamily: fontFamily,
    fontSize: typography_base
  }
})
