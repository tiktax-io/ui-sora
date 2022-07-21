import React from 'react'
import { render, screen } from '@testing-library/react'
import InputDate from './InputDate'

describe('InputDate component', () => {

  test('renders children text', () => {
    render(<InputDate>Hola</InputDate>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })

})
