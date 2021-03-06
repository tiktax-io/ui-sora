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

  test('Can specify font-size via props', () => {
    const tree = renderer
      .create(
        <>
          <Text size={2}>My custom text</Text>
          <Text size={3}>My custom text</Text>
        </>
      )
      .toJSON()
    
    expect(tree).toMatchSnapshot()
  })

  test('CSS Properties can be passed as props', () => {
    const customCSS = {
      opacity: 0.4,
      textDecoration: 'underline'  
    }
    const tree = renderer
      .create(
        <Text css={customCSS}>My custom text</Text>
      )
      .toJSON()
    
    expect(tree).toMatchSnapshot()
  })

})
