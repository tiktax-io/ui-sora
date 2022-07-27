import React, { FC, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputPassword from './InputPassword'
import Text from '../text/Text'

export default {
  title: 'Atoms/InputPassword',
  component: InputPassword,
} as ComponentMeta<typeof InputPassword>

const Template: ComponentStory<typeof InputPassword> =
  (args: any) => <InputPassword {...args} />

const ControlledInputTemplate: FC = () => {
  const [myValue, setMyValue] = useState<string | undefined>('')

  const controlledProps = {
    label: 'This text input is controlled',
    onChange: (newValue?: string) => setMyValue(newValue),
    placeholder: 'Controlled',
    value: myValue
  }

  const uncontrolledProps = {
    label: 'This text input is uncontrolled',
    placeholder: 'Uncontrolled'
  }

  return (
    <>
      <InputPassword {...controlledProps} />
      <br/>
      <InputPassword {...uncontrolledProps} />
      <br />
      <Text>{`The controlled input value is: ${myValue}`}</Text>
    </>
  )
}

/******************************************************************************
 * Documents a controlled input and an uncontroled input side by side.
 *****************************************************************************/
 export const Controllled = ControlledInputTemplate.bind({})

export const AllProps = Template.bind({})
export const Unhidden = Template.bind({})
export const Minimal = Template.bind({})
export const WithLabel = Template.bind({})
export const Invalid = Template.bind({})
export const WithSuccessFeedback = Template.bind({})

const commonArgs = {
  onChange: () => console.log('key pressed'),
  placeholder: 'Custom placeholder'
}

AllProps.args = {
  ...commonArgs,
  feedbackMessage: 'Random message!',
  isInvalid: false,
  isValid: false,
  label: 'Password',
  passwordIsHidden: true,
  value: 'MyPassword1234'
}

Unhidden.args = {
  passwordIsHidden: false,
  value: 'MyPassword1234'
}

Minimal.args = {
  ...commonArgs
}

WithLabel.args = {
  ...commonArgs,
  label: 'Password'
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
