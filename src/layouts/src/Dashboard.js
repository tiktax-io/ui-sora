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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]]
      }
    return t
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
const Dashboard_styles_1 = __importDefault(require('./Dashboard.styles'))
const navbar_1 = require('../../navbar')
/******************************************************************************
 * A layout wrapper in the form of a Dashboard. A left fixed div where
 * navigation elements can be rendered. On mobile hamburger menu will render
 * the side div. On narrow screens the side div has the enough width to render
 * icons instead of full nav tabs.
 * @param {DashboardProps} props
 * @param {ref} ref
 * @returns {ReactElement} Functional component, returns elements to render.
 *****************************************************************************/
const Dashboard = (0, react_1.memo)(
  (0, react_1.forwardRef)((props, ref) => {
    const restProps = __rest(props, [])
    const useStyles = (0, react_jss_1.createUseStyles)(Dashboard_styles_1.default)
    const classes = useStyles()
    const [showSidebar, setShowSideBar] = (0, react_1.useState)(true)
    const navbarProps = Object.assign(
      { handleShowSidebar: () => setShowSideBar(!showSidebar), behaviour: 'sticky' },
      props.navbarProps
    )
    const leftSideProps = {
      'data-testid': 'dashboard-leftside',
      className: classes.leftSide,
    }
    return react_1.default.createElement(
      'div',
      Object.assign({ className: classes.back, ref: ref }, restProps),
      react_1.default.createElement(navbar_1.Navbar, Object.assign({}, navbarProps)),
      showSidebar &&
        react_1.default.createElement(
          react_1.default.Fragment,
          null,
          react_1.default.createElement('aside', Object.assign({}, leftSideProps), props.sidebar)
        ),
      react_1.default.createElement('main', { className: classes.rightSide }, props.children)
    )
  })
)
exports.default = Dashboard
