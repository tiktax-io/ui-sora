import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InputText from './InputText'
import { InputTextProps } from './InputText.types'
import SoraTheme from '../sora-theme/SoraTheme'
import darkDefault from '../_styles/official_themes/dark_default'

describe('InputText component', () => {

  /****************************************************************************
   * Reset DOM after each test
   ***************************************************************************/
  const container = document.createElement('div')
  beforeEach(() => {
    document.body.appendChild(container)
  })
  afterEach(() => {
    document.body.removeChild(container)
  })

  test('Controlled forms are possible accepting value prop', () => {
    const props: InputTextProps = {
      onChange: () => console.log('Lore Ipsum'),
      value: 'Random value'
    }
    render(
      <InputText {...props} />
    )
    const demoElement = screen.getByDisplayValue(/Random value/i)
    expect(demoElement).toBeInTheDocument()
  })

  test('Renders feedback message if specified', () => {
    const props: InputTextProps = {
      feedbackMessage: 'Custom feedback message',
      isInvalid: true,
      onChange: () => console.log('Lore Ipsum'),
      dataTestId: 'Demo',
      value: 'Random value'
    }
    render(
      <InputText {...props} />
    )
    const demoElement = screen.getByTestId(/DemoSpanFeedbackMessage/i)
    expect(demoElement).toBeInTheDocument()
    expect(demoElement).toHaveTextContent(/Custom feedback message/i)
  })

  /****************************************************************************
   * Testing styles options.
   ***************************************************************************/
  test('Default InputText styles matches snapshot', () => {
    const props: InputTextProps = {
      onChange: () => console.log('Changed value'),
      value: 'Random value'
    }
    const tree = renderer
      .create(
        <InputText {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Invalid InputText styles matches snapshot', () => {
    const props: InputTextProps = {
      feedbackMessage: 'Error feedback message',
      isInvalid: true,
      onChange: () => console.log('Changed value'),
      value: 'Random value'
    }
    const tree = renderer
      .create(
        <InputText {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot() 
  })

  test('InputText with successful feedback styles matches snapshot', () => {
    const props: InputTextProps = {
      feedbackMessage: 'Optional successful message',
      isValid: true,
      onChange: () => console.log('Changed value'),
      value: 'Random value'
    }
    const tree = renderer
      .create(
        <InputText {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Styles are customized if wrapped by SoraTheme', () => {
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <SoraTheme theme={darkDefault}>
          <InputText dataTestId='customized' />
        </SoraTheme>
        <InputText dataTestId='default1' />
        <InputText dataTestId='default2' />
      </div>
    )
    const CustomInput = screen.getByTestId('customized').getAttribute('class')
    const Default1 = screen.getByTestId('default1').getAttribute('class')
    const Default2 = screen.getByTestId('default2').getAttribute('class')
    expect(Default1).toMatch(`${Default2}`)
    expect(CustomInput).not.toMatch(`${Default1}`)
    expect(CustomInput).not.toMatch(`${Default2}`)
  })

  test('Customized via SoraTheme matches snapshot', () => {
    const tree = renderer
      .create(
        <SoraTheme theme={darkDefault}>
          <InputText />
        </SoraTheme>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Readonly input matches snapshot', () => {
    const props = {
      readOnly: true,
      value: 'Can only be read'
    }
    const tree = renderer
      .create(
        <InputText {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('\'readOnly\' attribute can be passed as prop from parent', () => {
    const props = {
      dataTestId: 'readOnly-props-works',
      readOnly: true
    }
    render(
      <InputText {...props}/>
    )
    const element = screen.getByTestId('readOnly-props-worksInput')
    expect(element).toHaveAttribute('readonly')
  })

  test('Disabled input matches snapshot', () => {
    const props = {
      disabled: true,
      value: 'Can only be read'
    }
    const tree = renderer
      .create(
        <InputText {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('\'disabled\' attribute can be passed as prop from parent', () => {
    const props = {
      dataTestId: 'disabled-props-works',
      disabled: true
    }
    render(
      <InputText {...props}/>
    )
    const element = screen.getByTestId('disabled-props-worksInput')
    expect(element).toHaveAttribute('disabled')
  })

})
