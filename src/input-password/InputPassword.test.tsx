import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InputPassword from './InputPassword'
import { InputPasswordProps } from './InputPassword.types'

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

})
