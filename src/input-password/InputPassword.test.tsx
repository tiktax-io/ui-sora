import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InputPassword from './InputPassword'
import { InputPasswordProps } from './InputPassword.types'
import SoraTheme from '../sora-theme/SoraTheme'
import { mockTheme } from '../_mock_'
import { darkDefaultTheme } from '..'

describe('InputPassword component', () => {

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
    const props: InputPasswordProps = {
      onChange: () => console.log('Lore Ipsum'),
      value: 'Random value'
    }
    render(
      <InputPassword {...props} />
    )
    const demoElement = screen.getByDisplayValue(/Random value/i)
    expect(demoElement).toBeInTheDocument()
  })

  test('Renders feedback message if specified', () => {
    const props: InputPasswordProps = {
      feedbackMessage: 'Custom feedback message',
      isInvalid: true,
      onChange: () => console.log('Lore Ipsum'),
      dataTestId: 'Demo',
      value: 'Random value'
    }
    render(
      <InputPassword {...props} />
    )
    const demoElement = screen.getByTestId(/DemoSpanFeedbackMessage/i)
    expect(demoElement).toBeInTheDocument()
    expect(demoElement).toHaveTextContent(/Custom feedback message/i)
  })

  test('Clicking icon toggles password visibility', () => {
    const props: InputPasswordProps = {
      onChange: () => console.log('Lore Ipsum'),
      dataTestId: 'TestVisibility',
      value: 'MyPassword123'
    }
    render(
      <InputPassword {...props} />
    )
    const toggleIcon = screen.getByTestId(/TestVisibilityIconContainer/i)
    expect(toggleIcon).toBeInTheDocument()
    const revealedPassword = screen.getByTestId(/TestVisibilityInput/i)
    expect(revealedPassword).toHaveAttribute('type', 'password')
    fireEvent.click(toggleIcon)
    expect(revealedPassword).toHaveAttribute('type', 'text')
  })

  /****************************************************************************
   * Testing styles options.
   ***************************************************************************/
  test('Default InputPassword styles matches snapshot', () => {
    const props: InputPasswordProps = {
      onChange: () => console.log('Changed value'),
      value: 'Random value'
    }
    const tree = renderer
      .create(
        <InputPassword {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Invalid InputPassword styles matches snapshot', () => {
    const props: InputPasswordProps = {
      feedbackMessage: 'Error feedback message',
      isInvalid: true,
      onChange: () => console.log('Changed value'),
      value: 'Random value'
    }
    const tree = renderer
      .create(
        <InputPassword {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot() 
  })

  test('InputPassword with successful feedback styles matches snapshot', () => {
    const props: InputPasswordProps = {
      feedbackMessage: 'Optional successful message',
      isValid: true,
      onChange: () => console.log('Changed value'),
      value: 'Random value'
    }
    const tree = renderer
      .create(
        <InputPassword {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Styles are customized if wrapped by SoraTheme', () => {
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <SoraTheme theme={darkDefaultTheme}>
          <InputPassword dataTestId='customized' />
        </SoraTheme>
        <InputPassword dataTestId='default1' />
        <InputPassword dataTestId='default2' />
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
        <SoraTheme theme={darkDefaultTheme}>
          <InputPassword />
        </SoraTheme>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})
