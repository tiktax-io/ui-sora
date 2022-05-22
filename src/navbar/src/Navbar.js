'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            },
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
/* eslint-disable react/prop-types */
const react_1 = __importStar(require('react'))
const react_jss_1 = require('react-jss')
const Navbar_styles_1 = __importDefault(require('./Navbar.styles'))
const buttons_1 = require('../../buttons')
const icons_1 = require('../../icons')
/******************************************************************************
 * A layout wrapper in the form of a Dashboard. A left fixed div where
 * navigation elements can be rendered. On mobile hamburger menu will render
 * the side div. On narrow screens the side div has the enough width to render
 * icons instead of full nav tabs.
 * @param {unknown} props
 * @param {ref} ref
 * @returns {ReactElement} Functional component, returns elements to render.
 *****************************************************************************/
const Navbar = (0, react_1.memo)(
  (0, react_1.forwardRef)((props, ref) => {
    // const { ...restProps } = props
    const useStyles = (0, react_jss_1.createUseStyles)((0, Navbar_styles_1.default)(props))
    const classes = useStyles()
    const iconButtonProps = {
      appearance: 'minimal',
      border: 'none',
      'data-testid': 'navbar-hamburger-menu',
      icon: icons_1.MenuIcon,
      height: 40,
      onClick: () => (props.handleShowSidebar ? props.handleShowSidebar() : null),
    }
    return react_1.default.createElement(
      'div',
      { className: classes.navbar, ref: ref },
      react_1.default.createElement(
        'div',
        { className: classes.navbarContainer },
        !props.hideToggle && react_1.default.createElement(buttons_1.IconButton, Object.assign({}, iconButtonProps))
      )
    )
  })
)
exports.default = Navbar
