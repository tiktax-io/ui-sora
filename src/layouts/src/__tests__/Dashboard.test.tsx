/* eslint-disable no-undef */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Dashboard from '../Dashboard'

describe('Dashboard', () => {
  it('Renders its children without crashing', () => {
    expect(() => render(<Dashboard>Testing</Dashboard>)).not.toThrow()
  })
  it('Renders the leftside container by default on width screens', () => {
    render(<Dashboard sidebar={<h1>Left Content</h1>}>Right Content</Dashboard>)
    expect(screen.queryByTestId('dashboard-leftside')).toBeInTheDocument()
  })
  it('Renders Sidebar content if passed as props', () => {
    render(<Dashboard sidebar={<h1 data-testid="demo-leftcontent">Left Content</h1>}>Right Content</Dashboard>)
    expect(screen.queryByTestId('demo-leftcontent')).toBeInTheDocument()
  })
  it('Clicking on hamburger menu toggles sidebar visibility', () => {
    render(<Dashboard sidebar={<h1 data-testid="demo-leftcontent">Left Content</h1>}>Right Content</Dashboard>)
    expect(screen.queryByTestId('demo-leftcontent')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('navbar-hamburger-menu'))
    expect(screen.queryByTestId('demo-leftcontent')).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId('navbar-hamburger-menu'))
    expect(screen.queryByTestId('demo-leftcontent')).toBeInTheDocument()
  })
})
