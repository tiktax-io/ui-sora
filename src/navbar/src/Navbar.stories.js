'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const react_1 = require('@storybook/react')
const react_2 = __importDefault(require('react'))
const ui_box_1 = __importDefault(require('ui-box'))
const navbar_1 = require('../../navbar')
;(0, react_1.storiesOf)('navbar', module).add('Navbar', () => (
  <ui_box_1.default padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <navbar_1.Navbar>Navbar</navbar_1.Navbar>
  </ui_box_1.default>
))
