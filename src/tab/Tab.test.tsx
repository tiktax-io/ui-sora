import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react'
import Tab from './Tab'
import Icon from '../icon/Icon'
import SoraTheme from '../sora-theme/SoraTheme'
import darkDefault from '../_styles/official_themes/dark_default'

describe('Tab', () => {

  test('Snapshot of styles are matched', () => {
    const tree = renderer
      .create(
        <>
          <Tab isSelected>
            <Icon icon='dashboard' />
            <span>Dashboard</span>
          </Tab>
          <Tab>
            <Icon icon='wallet' />
            <span>Wallet</span>
          </Tab>
          <Tab>
            <Icon icon='dashboard' />
            <span>Dashboard</span>
          </Tab>
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Renders children elements', () => {
    render(<Tab>Hola</Tab>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })

  test('Triggers onClick function passed as prop when clicking on tab', () => {
    const handleClick = jest.fn()
    render(<Tab onClick={handleClick}>click Me</Tab>)
    expect(handleClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(2)
  })

  test('Tab is styled different when selected', () => {
    render(<Tab dataTestId='selected1' isSelected>Selected</Tab>)
    const SelectedTab = screen.getByTestId(/selected/i)
    expect(SelectedTab.getAttribute('class')).toMatch(/selectedContainer/gi)

    render(<Tab dataTestId='nonSelected'>NonSelected</Tab>)
    const SuccessButton = screen.getByTestId(/nonSelected/i)
    expect(SuccessButton.getAttribute('class')).toMatch(/container-/gi)
    expect(SuccessButton.getAttribute('class')).not.toMatch(/selectedContainer/gi)
  })

  test('Tab supports theme customisation', () => {
    render(
      <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <SoraTheme theme={darkDefault}>
          <Tab dataTestId='Customized1' />
          <Tab dataTestId='Customized2' />
        </SoraTheme>
        <Tab dataTestId='Default1' />
        <Tab dataTestId='Default2' />
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

    const tree = renderer
      .create(
        <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
          <SoraTheme theme={darkDefault}>
            <Tab dataTestId='Customized1' />
            <Tab dataTestId='Customized2' />
          </SoraTheme>
          <Tab dataTestId='Default1' />
          <Tab dataTestId='Default2' />
        </div>
      )
      .toJSON()
      expect(tree).toMatchSnapshot()
  })

})
