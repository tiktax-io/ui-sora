import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputPassword from './InputPassword'

export default {
  title: 'Atoms/InputPassword',
  component: InputPassword,
} as ComponentMeta<typeof InputPassword>

const Template: ComponentStory<typeof InputPassword> = (args: any) => <InputPassword {...args} />

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
