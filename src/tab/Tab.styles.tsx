import { createUseStyles } from 'react-jss'
import { fontFamily, greyNeutral, primary, typography_base } from '../_styles'

const commonStyles = {
  alignItems: 'center',
  background: 'white',
  borderRadius: '10px',
  color: greyNeutral,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  fontFamily: fontFamily,
  fontSize: typography_base,
  fontWeight: 700,
  gap: 20,
  height: '40px',
  paddingLeft: '5%',
  paddingRight: '5%',
  transition: [['background', '300ms'], ['color', '300ms'], ['width', '300ms']],
  width: '90%',
  '&:hover': {
    background: '#EBF0FF',
    color: primary,
    '& span': {
      color: primary
    }
  },
  '& span': {
    color: greyNeutral
  }
}

export const styles = {
  container: {
    ...commonStyles
  },
  selectedContainer: {
    ...commonStyles,
    background: '#EBF0FF',
    color: primary,
    '& span': {
      color: primary
    }
  }
}

export const useStyles = createUseStyles((theme) => ({ ...styles, ...theme.Tab }))
