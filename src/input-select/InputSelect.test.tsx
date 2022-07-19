import React from 'react'
import { render, screen } from '@testing-library/react'
import InputSelect from './InputSelect'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<InputSelect>Hola</InputSelect>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
