import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import InputSelect from './InputSelect'
import { InputSelectProps } from './InputSelect.types'

describe('InputSelect input select element', () => {

  test('Default component matches snapshot.', () => {
    const inputSelectProps: InputSelectProps = {
      onChange: () => null,
      options: ['test', 'snapshot']
    }
    const tree = renderer
      .create(
        <InputSelect {...inputSelectProps} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Renders options passed as props.', () => {
    const inputSelectProps: InputSelectProps = {
      onChange: () => null,
      options: ['one', 'two', 'three']
    }
    render(
      <InputSelect {...inputSelectProps} />
    )
    const element = screen.getByText(/one/i)
    expect(element).toBeInTheDocument()
  })

  test('A label can be specified via \'label\' prop.', () => {
    const inputSelectProps: InputSelectProps = {
      label: 'My custom label',
      onChange: () => null,
      options: ['one', 'two', 'three']
    }
    render(
      <InputSelect {...inputSelectProps} />
    )
    const element = screen.getByText(/My custom label/i)
    expect(element).toBeInTheDocument()
  })

  test('Can be customised via props named \"css\".', () => {
    const inputSelectProps: InputSelectProps = {
      css: {
        background: 'red'
      },
      onChange: () => null,
      options: ['one', 'two', 'three']
    }
    const tree = renderer
      .create(
        <InputSelect {...inputSelectProps} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Default value can be specified other than the first one.', () => {
    const inputSelectProps: InputSelectProps = {
      dataTestId: 'customValue',
      defaultValue: 'second',
      onChange: () => null,
      options: ['first', 'second', 'third']
    }
    render(
      <InputSelect {...inputSelectProps} />
    )
    const element = screen.getByTestId('customValue')
    expect(element).not.toHaveValue('first')
    expect(element).toHaveValue('second')
  })

  test('On change triggers the function passed as prop.', () => {
    const handleClick = jest.fn()
    const inputSelectProps: InputSelectProps = {
      dataTestId: 'customValue',
      defaultValue: 'second',
      onChange: handleClick,
      options: ['first', 'second', 'third']
    }
    render(
      <InputSelect {...inputSelectProps} />
    )
    expect(handleClick).toHaveBeenCalledTimes(0)
    fireEvent.change(screen.getByTestId('customValue'))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.change(screen.getByTestId('customValue'))
    expect(handleClick).toHaveBeenCalledTimes(2)
  })

})
