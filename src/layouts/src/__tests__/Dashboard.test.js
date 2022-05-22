'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
/* eslint-disable no-undef */
const react_1 = __importDefault(require('react'))
const react_2 = require('@testing-library/react')
const Dashboard_1 = __importDefault(require('../Dashboard'))
describe('Dashboard', () => {
  it('Renders its children without crashing', () => {
    expect(() => (0, react_2.render)(react_1.default.createElement(Dashboard_1.default, null, 'Testing'))).not.toThrow()
  })
  it('Renders the leftside container by default on width screens', () => {
    ;(0, react_2.render)(
      react_1.default.createElement(
        Dashboard_1.default,
        { sidebar: react_1.default.createElement('h1', null, 'Left Content') },
        'Right Content'
      )
    )
    expect(react_2.screen.queryByTestId('dashboard-leftside')).toBeInTheDocument()
  })
  it('Renders Sidebar content if passed as props', () => {
    ;(0, react_2.render)(
      react_1.default.createElement(
        Dashboard_1.default,
        { sidebar: react_1.default.createElement('h1', { 'data-testid': 'demo-leftcontent' }, 'Left Content') },
        'Right Content'
      )
    )
    expect(react_2.screen.queryByTestId('demo-leftcontent')).toBeInTheDocument()
  })
  it('Clicking on hamburger menu toggles sidebar visibility', () => {
    ;(0, react_2.render)(
      react_1.default.createElement(
        Dashboard_1.default,
        { sidebar: react_1.default.createElement('h1', { 'data-testid': 'demo-leftcontent' }, 'Left Content') },
        'Right Content'
      )
    )
    expect(react_2.screen.queryByTestId('demo-leftcontent')).toBeInTheDocument()
    react_2.fireEvent.click(react_2.screen.getByTestId('navbar-hamburger-menu'))
    expect(react_2.screen.queryByTestId('demo-leftcontent')).not.toBeInTheDocument()
    react_2.fireEvent.click(react_2.screen.getByTestId('navbar-hamburger-menu'))
    expect(react_2.screen.queryByTestId('demo-leftcontent')).toBeInTheDocument()
  })
})
