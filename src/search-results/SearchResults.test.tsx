import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchResults from './SearchResults'

describe('SearchResults layout', () => {
  const results = [
    'Hola',
    'Adios'
  ]
  test('Renders text contained in children elements', () => {
    render(<SearchResults>{results}</SearchResults>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
