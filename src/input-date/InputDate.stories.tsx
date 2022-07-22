import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputDate from './InputDate'

export default {
  title: 'Atoms/InputDate',
  component: InputDate,
} as ComponentMeta<typeof InputDate>

const Template: ComponentStory<typeof InputDate> =
  (args: any) => <InputDate {...args} />

export const Default = Template.bind({})
export const InvalidDate = Template.bind({})
export const SuccessFeedback = Template.bind({})
export const WithDefaultValue = Template.bind({})
export const WithDateRange = Template.bind({})
export const WithStep = Template.bind({})
export const CustomCSS = Template.bind({})

InvalidDate.args = {
  isInvalid: true,
  label: 'Date'
}

InvalidDate.args = {
  feedbackMessage: 'The date is invalid',
  isInvalid: true,
  label: 'Date'
}

SuccessFeedback.args = {
  feedbackMessage: 'The date is valid',
  isValid: true,
  label: 'Date'
}

WithDefaultValue.args = {
  label: 'Date',
  value: '2022-07-22'
}

WithDateRange.args = {
  label: 'Date',
  min: '2022-07-22',
  max: '2022-07-29',
  value: '2022-07-24'
}

WithStep.args = {
  label: 'Date',
  step: 7,
  value: '2022-07-18'
}

CustomCSS.args = {
  css: {
    background: 'red',
    color: 'yellow'
  },
  onChange: () => null,
  value: '1990-01-19'
}
