import React from 'react'
import { render, screen } from '@testing-library/react'
import Tab from './Tab'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<Tab>Hola</Tab>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
