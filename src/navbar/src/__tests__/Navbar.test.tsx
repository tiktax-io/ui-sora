/* eslint-disable no-undef */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('Renders its children without crashing', () => {
    expect(() =>
      render(
        <Navbar handleShowSidebar={() => console.log('clicked')}>
          <h1>Test</h1>
        </Navbar>
      )
    ).not.toThrow()
  })
  it('Clicking on hamburger menu calls the function passed as props', () => {
    const handleClick = jest.fn()

    render(<Navbar handleShowSidebar={handleClick} />)
    fireEvent.click(screen.getByTestId('navbar-hamburger-menu'))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByTestId('navbar-hamburger-menu'))
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
