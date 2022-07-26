import { Theme } from '../../_types'
import { hexToRGB, shadeColor } from '../../_utils/colors'
import { black, danger, greyNeutral, success } from '../colors'
import { inputGlobalStyles } from '../inputs'
import { fontFamily, typography_base, typography_scale } from '../typography'

const successShadow = hexToRGB(success, 0.25)
const dangerShadow = hexToRGB(danger, 0.25)
const blackTint = hexToRGB(black, 1.05)
export const darkBackground = shadeColor(black, 1.99)
const darkText = shadeColor(black, 0.27)
const passiveBlack = shadeColor(black, 1.15)

const darkDefault: Theme = {
  Button: {
    default_container: {
      ...inputGlobalStyles.container,
      cursor: 'pointer',
      background: black,
      border: `1px solid ${hexToRGB('#ffffff', 0.5)}`,
      transition: [['background', '300ms'], ['width', '300ms']],
      '&:hover': {
        background: shadeColor(black, 0.8),
      },
      '&:active': {
        boxShadow: `0px 0px 7px 8px ${blackTint}`
      },
      '&:focus-within': {
        boxShadow: `0px 0px 7px 8px ${blackTint}`
      },
      '& span': {
        fontSize: typography_scale[3],
        fontWeight: 'bold',
        letterSpacing: '0.46px',
        color: 'white'  
      }
    },
    success_container: {
      ...inputGlobalStyles.container,
      cursor: 'pointer',
      background: black,
      border: `2px solid ${success}`,
      boxShadow: `0px 4px 10px 3px ${successShadow}`,
      transition: [['background', '300ms'], ['width', '300ms']],
      '&:hover': {
        background: shadeColor(success, 1.2),
        '& span': {
          color: 'white'  
        }
      },
      '&:active': {
        boxShadow: `0px 0px 7px 8px ${successShadow}`
      },
      '&:focus-within': {
        boxShadow: `0px 0px 7px 8px ${successShadow}`
      },
      '& span': {
        fontSize: typography_scale[3],
        fontWeight: 'bold',
        letterSpacing: '0.46px',
        color: success  
      }
    },
    danger_container: {
      ...inputGlobalStyles.container,
      cursor: 'pointer',
      background: black,
      border: `2px solid ${danger}`,
      boxShadow: `0px 4px 10px 3px ${dangerShadow}`,
      transition: [['background', '300ms'], ['width', '300ms']],
      '&:hover': {
        background: shadeColor(danger, 1.2),
        color: 'white',
        '& span': {
          color: 'white'  
        }
      },
      '&:active': {
        boxShadow: `0px 0px 7px 8px ${dangerShadow}`
      },
      '&:focus-within': {
        boxShadow: `0px 0px 7px 8px ${dangerShadow}`
      },
      '& span': {
        fontSize: typography_scale[3],
        fontWeight: 'bold',
        letterSpacing: '0.46px',
        color: danger  
      }  
    }
  },
  Dashboard: {
    container: {
      background: darkBackground,
      color: darkText,
      display: 'flex',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
      '& aside': {
        color: darkText,
        flex: '0 0 320px',
        height: '100%',
        maxWidth: '100%',
        top: 65,
        width: '320px',
      },
      '& main': {
        color: darkText,
        width: '100%'
      }
    }  
  },
  InputText: {
    container: {
      background: 'red'
    },
    label: {
      color: shadeColor(black, 0.75),
      fontFamily: fontFamily,
      fontSize: typography_scale[3],
      fontWeight: 600
    }
  },
  Navbar: {
    container: {
      alignItems: 'center',
      background: darkBackground,
      borderBottom: `1px solid ${passiveBlack}`,
      color: darkText,
      display: 'flex',
      gap: '40px',
      height: '65px',
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    content: {
      alignItems: 'center',
      color: darkText,
      display: 'flex',
      gap: '40px',
      height: '100%',
      maxWidth: '1460px',
      width: '95%'
    }  
  },
  Tab: {
    container: {
      alignItems: 'center',
      background: darkBackground,
      borderRadius: '10px',
      color: greyNeutral,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      fontFamily: fontFamily,
      fontSize: typography_base,
      fontWeight: 700,
      gap: '20px',
      height: '40px',
      paddingLeft: '5%',
      paddingRight: '5%',
      transition: [['background', '300ms'], ['color', '300ms'], ['width', '300ms']],
      width: '90%',
      '&:hover': {
        background: black,
        color: 'white',
        '& span': {
          color: 'white'
        }
      },
      '& span': {
        color: greyNeutral
      }  
    },
    selectedContainer: {
      alignItems: 'center',
      borderRadius: '10px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      fontFamily: fontFamily,
      fontSize: typography_base,
      fontWeight: 700,
      gap: '20px',
      height: '40px',
      paddingLeft: '5%',
      paddingRight: '5%',
      transition: [['background', '300ms'], ['color', '300ms'], ['width', '300ms']],
      width: '90%',
      '&:hover': {
        background: black,
        color: 'white',
        '& span': {
          color: 'white'
        }
      },
      background: black,
      color: 'white',
      '& span': {
        color: 'white'
      }  
    }
  }
}

export default darkDefault
