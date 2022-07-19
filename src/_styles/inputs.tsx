import { hexToRGB, shadeColor } from '../_utils/colors'
import { primary } from './colors'
import { spacing_scale } from './misc'
import { fontFamily, typography_base, typography_scale } from './typography'

export const inputGlobalStyles = {
  container: {
    border: 'none',
    borderRadius: '10px',
    height: '40px',
    fontFamily: fontFamily,
    fontSize: typography_base,
    paddingLeft: `${spacing_scale[3]}px`,
    paddingRight: `${spacing_scale[3]}px`,
    '& span': {
      fontSize: typography_scale[3],
    },
    '&:disabled': {
      background: shadeColor('#ffffff', 1.05),
      border: '1px solid transparent',
      boxShadow: 'none',
      cursor: 'not-allowed',
      '& span': {
        color: shadeColor('#ffffff', 1.14)
      },
      '&:active': {
        background: shadeColor('#ffffff', 1.05),
        boxShadow: 'none'
      },
      '&:focus': {
        background: shadeColor('#ffffff', 1.05),
        boxShadow: 'none'
      },
      '&:hover': {
        background: shadeColor('#ffffff', 1.05),
        boxShadow: 'none'
      }
    },
    '&:focus-within': {
      border: `1px solid ${hexToRGB(primary, 0.5)}`,
      boxShadow: `0px 0px 4px 5px ${hexToRGB(primary, 0.15)}`,
      outline: 'none'
    }
  }
}
