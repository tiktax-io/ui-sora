import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'
import { ThemeProvider } from 'react-jss'

describe('Button', () => {
  test('Renders children text', () => {
    render(<Button>Hola</Button>)
    const ButtonElement = screen.getByText(/Hola/i)
    expect(ButtonElement).toBeInTheDocument()
  })

  test('Accepts an `onClick` handler that gets called upon clicking', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    expect(handleClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(2)
  })

  test('Button appearance is "default" if not specified', () => {
    render(<Button dataTestId='appearance-null'>Default</Button>)
    const ButtonContainer = screen.getByTestId(/appearance-null/i)
    expect(ButtonContainer.getAttribute('class')).toMatch(/default/gi)
  })

  test('Button is styled different if "appearance" is specified', () => {
    render(<Button dataTestId='primary' appearance='primary'>Primary</Button>)
    const PrimaryButton = screen.getByTestId(/Primary/i)
    expect(PrimaryButton.getAttribute('class')).toMatch(/primary/gi)
    render(<Button dataTestId='success' appearance='success'>Success</Button>)
    const SuccessButton = screen.getByTestId(/Success/i)
    expect(SuccessButton.getAttribute('class')).toMatch(/success/gi)
    render(<Button dataTestId='danger' appearance='danger'>Danger</Button>)
    const DangerButton = screen.getByTestId(/Danger/i)
    expect(DangerButton.getAttribute('class')).toMatch(/danger/gi)
  })

  test('Styles are customized if wrapped by JSS ThemeProvider', () => {
    const customTheme = {
      default_container: {
        background: 'lime',
        border: 'green',
        borderRadius: '4px',
        padding: '20px'
      },
      default_label: {
        color: 'white',
        fontSize: '20px'
      }
    }
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <ThemeProvider theme={customTheme}>
          <Button dataTestId='customized'>Customized</Button>
        </ThemeProvider>
        <Button dataTestId='default1'>Default1</Button>
        <Button dataTestId='default2'>Default2</Button>
      </div>
    )
    const CustomButton = screen.getByTestId(/customized/i).getAttribute('class')
    const Default1 = screen.getByTestId(/default1/i).getAttribute('class')
    const Default2 = screen.getByTestId(/default2/i).getAttribute('class')
    expect(Default1).toMatch(`${Default2}`)
    expect(CustomButton).not.toMatch(`${Default1}`)
    expect(CustomButton).not.toMatch(`${Default2}`)
  })

  test('Disable html property is passed to html button element', () => {
    render(<Button dataTestId='disabled-button' disabled>Disabled</Button>)
    render(<Button dataTestId='enabled-button'>Enabled</Button>)
    const DisabledButton = screen.getByTestId(/disabled-button/i)
    const EnabledButton = screen.getByTestId(/enabled-button/i)
    expect(DisabledButton).not.toBeEnabled()
    expect(EnabledButton).toBeEnabled()
  })

  test('Disabled buttons don\'t trigger onClick handler', () => {
    const handleClick = jest.fn()
    render(
      <>
        <Button dataTestId='enabled' onClick={handleClick}>Enabled</Button>
        <Button dataTestId='disabled' onClick={handleClick} disabled>Disabled</Button>
      </>
    )
    expect(handleClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByTestId(/enabled/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText(/disabled/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

})
