import { createUseStyles } from 'react-jss'

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    '& aside': {
      flex: '0 0 320px',
      height: '100%',
      maxWidth: '100%',
      top: 65,
      width: '320px',
    },
    '& main': {
      width: '100%'
    }
  }
}

export const useStyles = createUseStyles((theme) => ({ ...styles, ...theme.Dashboard }))
