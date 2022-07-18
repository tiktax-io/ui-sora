import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      fontWeight: 'bold'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})
