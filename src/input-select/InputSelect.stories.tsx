import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputSelect from './InputSelect'

export default {
  title: 'Atoms/InputSelect',
  component: InputSelect,
} as ComponentMeta<typeof InputSelect>

const Template: ComponentStory<typeof InputSelect> = (args: any) => <InputSelect {...args} />

export const Default = Template.bind({})
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
}

Primary.args = {
  label: 'InputSelect',
  variant: InputSelectVariants.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'InputSelect',
  variant: InputSelectVariants.secondary
} */
