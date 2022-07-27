import React, { FC, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputText from './InputText'
import Text from '../text/Text'
import { primary } from '../_styles'

export default {
  title: 'Atoms/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>

/******************************************************************************
 * Minimal ComponentStory that renders a single InputText that accepts all
 * props as on InputTextProps.
 *****************************************************************************/
const Template: ComponentStory<typeof InputText> =
  (args: any) => <InputText {...args} />

const ControlledInput: FC = () => {
  const [myValue, setMyValue] = useState('')

  const controlledProps = {
    label: 'This text input is controlled',
    onChange: (newValue: string) => setMyValue(newValue),
    placeholder: 'Controlled',
    value: myValue
  }

  const uncontrolledProps = {
    label: 'This text input is controlled',
    placeholder: 'Uncontrolled'
  }

  return (
    <>
      <InputText {...controlledProps} />
      <br/>
      <InputText {...uncontrolledProps} />
      <br />
      <Text>{`The controlled input value is: ${myValue}`}</Text>
    </>
  )
}

/******************************************************************************
 * Documents a controlled input and an uncontroled input side by side.
 *****************************************************************************/
export const Controllled = ControlledInput.bind({})

export const AllProps = Template.bind({})
export const Minimal = Template.bind({})
export const WithLabel = Template.bind({})
export const Invalid = Template.bind({})
export const WithSuccessFeedback = Template.bind({})
export const CustomCSSProps = Template.bind({})

const commonArgs = {
  onChange: () => console.log('key pressed'),
  placeholder: 'Custom placeholder'
}

AllProps.args = {
  ...commonArgs,
  feedbackMessage: 'Random message!',
  isInvalid: false,
  isValid: false,
  label: 'Test all props',
  value: ''
}

Minimal.args = {
  ...commonArgs
}

WithLabel.args = {
  ...commonArgs,
  label: 'My custom label'
}

Invalid.args = {
  ...commonArgs,
  isInvalid: true,
  feedbackMessage: 'Invalid input!',
  value: 'Wrong input here'
}

WithSuccessFeedback.args = {
  ...commonArgs,
  isValid: true,
  feedbackMessage: 'Optional successful feedback',
  value: 'My custom input'
}

CustomCSSProps.args = {
  ...commonArgs,
  css: {
    background: primary,
    fontFamily: '\'Roboto Mono\', monospace'
  },
  label: 'Customized via \'css\' prop',
  value: 'My custom input'
}
