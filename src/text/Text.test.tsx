import React from 'react'
import { render, screen } from '@testing-library/react'
import Text from './Text'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<Text>Hola</Text>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
