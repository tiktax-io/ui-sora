import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Badge } from '../'

describe('Badge', () => {
  it('Renders its children without crashing', () => {
    expect(() => render(<Badge>Testing</Badge>)).not.toThrow()
  })
  it('Renders a close button if specified with props', () => {
    render(<Badge hasCloseButton>Testing</Badge>)
    expect(screen.queryByTestId('badge-close-button')).toBeInTheDocument()
  })
  it("Doesn't render a close button if is not specified with props", () => {
    render(<Badge>Testing</Badge>)
    expect(screen.queryByTestId('badge-close-button')).not.toBeInTheDocument()
  })
  it('Close button click triggers "onRemove" function passed as prop', () => {
    const handleClick = jest.fn()
    render(
      <Badge hasCloseButton onRemove={handleClick}>
        Testing
      </Badge>
    )
    fireEvent.click(screen.getByTestId('badge-close-button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
