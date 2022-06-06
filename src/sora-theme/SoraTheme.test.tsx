import React from 'react'
import { render, screen } from '@testing-library/react'
import SoraTheme from './SoraTheme'
import darkDefault from '../_styles/official_themes/dark_default'
import Button from '../button/Button'

describe('SoraTheme wrapper', () => {
  test('renders children text', () => {
    render(<SoraTheme theme={darkDefault}>Hola</SoraTheme>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })

  test('Styles of all children elements are customized', () => {
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <SoraTheme theme={darkDefault}>
          <Button dataTestId='Customized1'>Customized1</Button>
          <Button dataTestId='Customized2'>Customized2</Button>
        </SoraTheme>
        <Button dataTestId='Default1'>Default1</Button>
        <Button dataTestId='Default2'>Default2</Button>
      </div>
    )
    const CustomButton = screen.getByTestId(/Customized1/i).getAttribute('class')
    const CustomButton2 = screen.getByTestId(/Customized2/i).getAttribute('class')
    const Default1 = screen.getByTestId(/Default1/i).getAttribute('class')
    const Default2 = screen.getByTestId(/Default2/i).getAttribute('class')
    expect(CustomButton).toMatch(`${CustomButton2}`)
    expect(Default1).toMatch(`${Default2}`)
    expect(CustomButton).not.toMatch(`${Default1}`)
    expect(CustomButton).not.toMatch(`${Default2}`)
  })
})
