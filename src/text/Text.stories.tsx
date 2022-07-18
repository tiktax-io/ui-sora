import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from './Text'

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args: any) => <Text {...args} />

export const Default = Template.bind({})
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
}

Primary.args = {
  label: 'Text',
  variant: TextVariants.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Text',
  variant: TextVariants.secondary
} */
