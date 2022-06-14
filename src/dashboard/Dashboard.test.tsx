import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'
import { act } from 'react-dom/test-utils'
import SoraTheme from '../sora-theme/SoraTheme'
import darkDefault from '../_styles/official_themes/dark_default'

describe('Layouts/Dashboard', () => {

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

  test('renders children elements', () => {
    render(<Dashboard>Hola</Dashboard>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })

  test('It renders sidebar content passed as props "sidebarChildren" on wide screens', () => {
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1500
      })
      fireEvent.resize
    })

    const sidebarChildren = <span>Sidebar content</span>
    const dashboardProps = {
      dataTestId: 'rendersSide',
      sidebarChildren: sidebarChildren,
    }
    render(<Dashboard {...dashboardProps} />)
    const DashboardElement = screen.getByTestId(/rendersSide/i)
    expect(DashboardElement).toHaveTextContent(/Sidebar content/i)

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: defaultWidth
      })
      fireEvent.resize
    })
  })

  test('On tablet and smaller devices sidebar is not rendered by default', () => {
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1279
      })
      fireEvent.resize
    })

    const sidebarChildren = <span>Sidebar content</span>
    const dashboardProps = {
      dataTestId: 'rendersSide',
      sidebarChildren: sidebarChildren,
    }
    render(<Dashboard {...dashboardProps} />)
    const DashboardElement = screen.getByTestId(/rendersSide/i)
    expect(DashboardElement).not.toHaveTextContent(/Sidebar content/i)

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: defaultWidth
      })
      fireEvent.resize
    })
  })

  test('Clicking on Navbar hamburger menu toggles sidebar rendering', () => {
    const sidebarChildren = <span>Sidebar content</span>
    const dashboardProps = {
      dataTestId: 'togglesSide',
      sidebarChildren: sidebarChildren,
    }
    render(<Dashboard {...dashboardProps} />)
    const DashboardElement = screen.getByTestId(/togglesSide/i)

    expect(DashboardElement).not.toHaveTextContent(/Sidebar content/i)
    fireEvent.click(screen.getByTitle('HamburgerMenu'))
    expect(DashboardElement).toHaveTextContent(/Sidebar content/i)
    fireEvent.click(screen.getByTitle('HamburgerMenu'))
    expect(DashboardElement).not.toHaveTextContent(/Sidebar content/i)
  })

  test('Dashboard supports theme customisation', () => {
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <SoraTheme theme={darkDefault}>
          <Dashboard dataTestId='Customized1' />
          <Dashboard dataTestId='Customized2' />
        </SoraTheme>
        <Dashboard dataTestId='Default1' />
        <Dashboard dataTestId='Default2' />
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
