import React, { ChangeEvent, useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import InputDate from './InputDate'
import { InputDateProps } from './InputDate.types'
import renderer from 'react-test-renderer'

describe('InputDate component', () => {

  test('Can be queried by \'dataTestId\' prop', () => {
    const props: InputDateProps = {
      dataTestId: 'foundByTestId',
      onChange: () => null
    }
    render(
      <InputDate {...props} />
    )
    const element = screen.queryByTestId('foundByTestId')
    expect(element).toBeInTheDocument()
  })

  test('Accepts value via \'value\' prop', () => {
    const props: InputDateProps = {
      dataTestId: 'valueTest',
      onChange: () => null,
      value: '1990-01-19'
    }
    render(
      <InputDate {...props} />
    )
    const element = screen.getByTestId('valueTest')
    expect(element).toHaveValue('1990-01-19')
  })

  test('Displays error feedback message if specified', () => {
    const props: InputDateProps = {
      dataTestId: 'withFeedback',
      feedbackMessage: 'Invalid message',
      isInvalid: true,
      onChange: () => null
    }
    render(
      <InputDate {...props} />
    )
    const element = screen.getByTestId('withFeedbackSpanFeedbackMessage')
    expect(element).toHaveTextContent(/Invalid message/i)
  })

  test('Displays optional error status styled as expected', () => {
    const props: InputDateProps = {
      feedbackMessage: 'Invalid date',
      isInvalid: true,
      onChange: () => null
    }
    const tree = renderer
    .create(
      <InputDate {...props} />
    )
    .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Displays success feedback message if specified', () => {
    const props: InputDateProps = {
      dataTestId: 'successFeedback',
      feedbackMessage: 'Success message',
      isValid: true,
      onChange: () => null
    }
    render(
      <InputDate {...props} />
    )
    const element = screen.getByTestId('successFeedbackSpanFeedbackMessage')
    expect(element).toHaveTextContent(/Success message/i)
  })

  test('Displays optional success status styled as expected', () => {
    const props: InputDateProps = {
      feedbackMessage: 'Success date',
      isValid: true,
      onChange: () => null
    }
    const tree = renderer
      .create(
        <InputDate {...props} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('A label can be specified via \'label\' prop.', () => {
    const props: InputDateProps = {
      label: 'My custom label',
      onChange: () => null
    }
    render(
      <InputDate {...props} />
    )
    const element = screen.getByText(/My custom label/i)
    expect(element).toBeInTheDocument()
  })

  test('Input with labels matched expected styles', () => {
    const props: InputDateProps = {
      label: 'My custom label',
      onChange: () => null
    }
    const tree = renderer
      .create(
        <InputDate {...props} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Accepts prop \'min\' and pass it to HTML element', () => {
    const props: InputDateProps = {
      dataTestId: 'acceptsMin',
      min: '1990-01-19',
      onChange: () => null,
      value: '1990-01-19'
    }
    render(
      <InputDate {...props} />
    )
    const element = screen.getByTestId('acceptsMin')
    expect(element).toHaveAttribute('min', '1990-01-19')
  })

  test('Accepts prop \'max\' and pass it to HTML element', () => {
    const props: InputDateProps = {
      dataTestId: 'acceptsMax',
      max: '1990-01-19',
      onChange: () => null,
      value: '1990-01-19'
    }
    render(
      <InputDate {...props} />
    )
    const element = screen.getByTestId('acceptsMax')
    expect(element).toHaveAttribute('max', '1990-01-19')
  })

  test('Accepts prop \'step\' and pass it to HTML element', () => {
    const props: InputDateProps = {
      dataTestId: 'acceptsStep',
      step: 7,
      onChange: () => null
    }
    render(
      <InputDate {...props} />
    )
    const element = screen.getByTestId('acceptsStep')
    expect(element).toHaveAttribute('step', '7')
  })

  test('On date change triggers function passed as prop \'onChange\'', () => {
    const Container = () => {
      const [value, setValue] = useState<string>('1990-01-30')
      const props: InputDateProps = {
        dataTestId: 'canChange',
        onChange: ({ target }: ChangeEvent<HTMLSelectElement>) =>
          setValue(target?.value),
        value: value
      }
      return (
        <InputDate {...props} />
      )
    }
    render(
      <Container/>
    )
    const element = screen.getByTestId('canChange')
    expect(element).toHaveValue('1990-01-30')
    fireEvent.change(element, {target: {value: '1990-01-19'}})
    expect(element).toHaveValue('1990-01-19')
    fireEvent.change(element, {target: {value: '1990-01-18'}})
    expect(element).toHaveValue('1990-01-18')
  })

  test('Can be customised via props named \"css\".', () => {
    const props: InputDateProps = {
      css: {
        background: 'red',
        color: 'yellow'
      },
      onChange: () => null,
      value: '1990-01-19'
    }
    const tree = renderer
      .create(
        <InputDate {...props} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})
