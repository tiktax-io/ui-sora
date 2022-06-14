import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import SoraTheme from '../sora-theme/SoraTheme'
import darkDefault from '../_styles/official_themes/dark_default'

describe('Jest can resize window width', () => {
  const defaultWidth = window.innerWidth

  it('Viewport width can be modified by Jest', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 390
    })
    fireEvent.resize
    expect(window.innerWidth).toBe(390)
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: defaultWidth
    })
    fireEvent.resize
  })
  it('Viewport width is reseted after each test', () => {
    expect(window.innerWidth).not.toBe(390)
  })
})

describe('Navbar component', () => {
  const container = document.createElement('div')
  beforeEach(() => {
    document.body.appendChild(container)
  })
  /******************************************************************************
   * Reset DOM after each test
   *****************************************************************************/
   afterEach(() => {
    document.body.removeChild(container)
  })

  test('Renders multiple children without crashing', () => {
    render(
      <Navbar>
        <div>one</div>
        <div>two</div>
      </Navbar>
    )
    const oneElement = screen.getByText(/one/i)
    const twoElement = screen.getByText(/two/i)
    expect(oneElement).toBeInTheDocument()
    expect(twoElement).toBeInTheDocument()
  })

  test('HamburgerMenuIcon is shown by default on small screens', () => {
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 390
      })
      fireEvent.resize
    })
    render(
      <Navbar>
        <div>one</div>
        <div>two</div>
      </Navbar>
    )
    const icon = screen.getByTitle('HamburgerMenu')
    expect(icon).toBeInTheDocument()
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: defaultWidth
    })
    fireEvent.resize
  })

  test('HamburgerMenuIcon is hidden on desktop screens by default', () => {
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1500
      })
      fireEvent.resize
    })

    render(<Navbar/>)
    expect(screen.queryByTitle('HamburgerMenu')).toBeNull()
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: defaultWidth
      })
      fireEvent.resize
    })
  })

  test('Accepts an `onHamburgerMenuClick` handler that gets called upon clicking on icon', () => {
    const defaultWidth = window.innerWidth
    const handleClick = jest.fn()

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 390
      })
      fireEvent.resize
    })

    render(<Navbar onHamburgerMenuClick={handleClick}/>)
    expect(handleClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByTitle('HamburgerMenu'))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByTitle('HamburgerMenu'))
    expect(handleClick).toHaveBeenCalledTimes(2)

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: defaultWidth
      })
      fireEvent.resize
    })
  })

  test('HamburgerMenuIcon is hidden on small screens if specified by prop', () => {
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 390
      })
      fireEvent.resize
    })
    render(
      <Navbar hasHamburgerMenu={false} />
    )
    const icon = screen.queryByTitle('HamburgerMenu')
    expect(icon).toBeNull()
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: defaultWidth
    })
    fireEvent.resize
  })

  test('HamburgerMenuIcon is shown on desktop screens if specified by prop', () => {
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1500
      })
      fireEvent.resize
    })
    render(
      <Navbar hasHamburgerMenu />
    )
    const icon = screen.getByTitle('HamburgerMenu')
    expect(icon).toBeInTheDocument()
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: defaultWidth
    })
    fireEvent.resize
  })

  test('Navbar supports theme customisation', () => {
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <SoraTheme theme={darkDefault}>
          <Navbar dataTestId='Customized1' />
          <Navbar dataTestId='Customized2' />
        </SoraTheme>
        <Navbar dataTestId='Default1' />
        <Navbar dataTestId='Default2' />
      </div>
    )
    const CustomNavbar = screen.getByTestId(/Customized1/i).getAttribute('class')
    const CustomNavbar2 = screen.getByTestId(/Customized2/i).getAttribute('class')
    const Default1 = screen.getByTestId(/Default1/i).getAttribute('class')
    const Default2 = screen.getByTestId(/Default2/i).getAttribute('class')
    expect(CustomNavbar).toMatch(`${CustomNavbar2}`)
    expect(Default1).toMatch(`${Default2}`)
    expect(CustomNavbar).not.toMatch(`${Default1}`)
    expect(CustomNavbar).not.toMatch(`${Default2}`)
  })

})
