import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InputText from './InputText'
import { InputTextProps } from './InputText.types'

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

})
