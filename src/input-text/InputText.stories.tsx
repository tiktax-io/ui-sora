import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputText from './InputText'

export default {
  title: 'Atoms/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (args: any) => <InputText {...args} />

export const AllProps = Template.bind({})
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
