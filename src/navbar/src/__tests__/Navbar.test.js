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
const Navbar_1 = __importDefault(require('../Navbar'))
describe('Navbar', () => {
  it('Renders its children without crashing', () => {
    expect(() =>
      (0, react_2.render)(
        react_1.default.createElement(
          Navbar_1.default,
          { handleShowSidebar: () => console.log('clicked') },
          react_1.default.createElement('h1', null, 'Test')
        )
      )
    ).not.toThrow()
  })
  it('Clicking on hamburger menu calls the function passed as props', () => {
    const handleClick = jest.fn()
    ;(0, react_2.render)(react_1.default.createElement(Navbar_1.default, { handleShowSidebar: handleClick }))
    react_2.fireEvent.click(react_2.screen.getByTestId('navbar-hamburger-menu'))
    expect(handleClick).toHaveBeenCalledTimes(1)
    react_2.fireEvent.click(react_2.screen.getByTestId('navbar-hamburger-menu'))
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
