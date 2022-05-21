import { NavbarProps } from '../../_types'

const styles = ({ behaviour }: NavbarProps) => ({
  navbar: {
    alignItems: 'center',
    background: 'white',
    display: 'flex',
    height: '65px',
    left: 0,
    position: behaviour === 'scrollable' ? 'absolute' : 'fixed',
    top: 0,
    width: '100%',
    zIndex: 3,
  },
  navbarContainer: {
    // background: 'orange',
    display: 'flex',
    marginLeft: '1%',
    width: '98%',
  },
})

export default styles
