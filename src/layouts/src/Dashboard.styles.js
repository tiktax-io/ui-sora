'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const _styles_1 = require('../../_styles')
const styles = {
  back: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  leftSide: {
    background: 'white',
    height: '100%',
    left: 0,
    width: '100%',
    zIndex: 2,
  },
  navbar: {
    alignItems: 'center',
    background: 'white',
    display: 'flex',
    height: '65px',
    left: 0,
    position: 'absolute',
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
  overlay: {
    background: 'rgba(67, 90, 111, 0.7)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  rightSide: {
    background: '#ebecf0',
    height: '100%',
    left: 0,
    top: 0,
    width: '100%',
  },
  [`@media (min-width: ${_styles_1.BREAKPOINTS[0]}px)`]: {
    back: {
      display: 'flex',
    },
    leftSide: {
      maxWidth: '279px',
    },
  },
  [`@media (min-width: ${_styles_1.BREAKPOINTS[3]}px)`]: {
    leftSide: {
      boxShadow:
        'rgb(145 158 171 / 10%) 0px 8px 10px -5px, rgb(145 158 171 / 7%) 0px 16px 24px 2px, rgb(145 158 171 / 6%) 0px 6px 30px 5px',
    },
    overlay: {
      display: 'none',
    },
  },
}
exports.default = styles
