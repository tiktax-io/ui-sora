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
    expect(() => (0, react_2.render)(<Dashboard_1.default>Testing</Dashboard_1.default>)).not.toThrow()
  })
})
