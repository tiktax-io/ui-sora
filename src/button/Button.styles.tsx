import { createUseStyles } from 'react-jss'
import {
  black,
  danger,
  inputGlobalStyles,
  primary,
  success,
  typography_scale
} from '../_styles'
import { hexToRGB, shadeColor } from '../_utils/colors'

const primaryShadow = hexToRGB(primary, 0.25)
const successShadow = hexToRGB(success, 0.25)
const dangerShadow = hexToRGB(danger, 0.25)
const blackShadow = hexToRGB(black, 0.05)

const commonStyles = {
  container: {
    ...inputGlobalStyles.container,
    '&:focus-within': {
      outline: 'none'
    },
    cursor: 'pointer'
  },
  label: {
    fontSize: typography_scale[3],
    fontWeight: 'bold',
    letterSpacing: '0.46px'
  }
}

export const styles = {
  default_container: {
    ...commonStyles.container,
    background: 'white',
    border: `1px solid ${hexToRGB(black, 0.1)}`,
    transition: [['background', '300ms'], ['width', '300ms']],
    '&:hover': {
      background: shadeColor('#ffffff', 1.05)
    },
    '&:active': {
      boxShadow: `0px 0px 7px 8px ${blackShadow}`
    },
    '&:focus': {
      boxShadow: `0px 0px 7px 8px ${blackShadow}`
    },
    '& span': {
      ...commonStyles.label,
      color: black
    }
  },
  primary_container: {
    ...commonStyles.container,
    background: primary,
    boxShadow: `0px 4px 10px 3px ${primaryShadow}`,
    transition: [['background', '300ms']],
    '&:hover': {
      background: shadeColor(primary, 1.2)
    },
    '&:active': {
      boxShadow: `0px 0px 7px 8px ${primaryShadow}`
    },
    '&:focus': {
      boxShadow: `0px 0px 7px 8px ${primaryShadow}`
    },
    '& span': {
      ...commonStyles.label,
      color: 'white'  
    }
  },
  success_container: {
    ...commonStyles.container,
    background: '#55E47F',
    boxShadow: `0px 4px 10px 3px ${successShadow}`,
    transition: [['background', '300ms'], ['width', '300ms']],
    '&:hover': {
      background: shadeColor(success, 1.2)
    },
    '&:active': {
      boxShadow: `0px 0px 7px 8px ${successShadow}`
    },
    '&:focus': {
      boxShadow: `0px 0px 7px 8px ${successShadow}`
    },
    '& span': {
      ...commonStyles.label,
      color: 'white'  
    }
  },
  danger_container: {
    ...commonStyles.container,
    background: danger,
    boxShadow: `0px 4px 10px 3px ${dangerShadow}`,
    transition: [['background', '300ms'], ['width', '300ms']],
    '&:hover': {
      background: shadeColor(danger, 1.2)
    },
    '&:active': {
      boxShadow: `0px 0px 7px 8px ${dangerShadow}`
    },
    '&:focus': {
      boxShadow: `0px 0px 7px 8px ${dangerShadow}`
    },
    '& span': {
      ...commonStyles.label,
      color: 'white'  
    }
  }
}

export const useStyles = createUseStyles((theme) => ({ ...styles, ...theme.Button }))
