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

/* Primary.parameters = {
  backgrounds: { default: 'dark' }
}

Primary.args = {
  label: 'InputDate',
  variant: InputDateVariants.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'InputDate',
  variant: InputDateVariants.secondary
} */
