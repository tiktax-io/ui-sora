import { createUseStyles } from 'react-jss'
import { black } from '../_styles'
import { hexToRGB } from '../_utils/colors'

export const styles = {
  container: {
    alignItems: 'center',
    background: 'white',
    boxShadow: `0px 4px 4px 0px ${hexToRGB(black, 0.1)}`,
    display: 'flex',
    gap: 40,
    height: '65px',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    gap: 40,
    height: '100%',
    maxWidth: '1460px',
    width: '95%'
  }
}

export const useStyles = createUseStyles((theme) => ({ ...styles, ...theme.Navbar }))
