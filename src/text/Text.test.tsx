import React from 'react'
import { render, screen } from '@testing-library/react'
import Text from './Text'
import renderer from 'react-test-renderer'
import { danger } from '../_styles'

describe('Text', () => {

  test('Renders text as children', () => {
    render(<Text>Hola</Text>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })

  test('Can customize color via props', () => {
    const tree = renderer
      .create(
        <Text color={danger}>My custom text</Text>
      )
      .toJSON()
    
    expect(tree).toMatchSnapshot()
  })

  test('Can specify weight via props', () => {
    const tree = renderer
      .create(
        <Text weight={700}>My custom text</Text>
      )
      .toJSON()
    
    expect(tree).toMatchSnapshot()
  })

})
