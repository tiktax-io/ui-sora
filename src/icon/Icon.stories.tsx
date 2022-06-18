import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: { type: 'color' }
    },
    fill: {
      control: { type: 'color' }
    },
    icon: {
      options: ['dashboard', 'time', 'wallet', 'integrations', 'settings', 'bell'],
      control: { type: 'select' }
    },
    size: {
      control: { type: 'range', min: 1, max: 200, step: 1 } 
    }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args: any) => <Icon {...args} />

export const DashboardIcon = Template.bind({})
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
} */

DashboardIcon.args = {
  color: '#8F95B2',
  fill: '#fff',
  icon: 'dashboard',
  size: 16
}

/* export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Icon',
  variant: IconVariants.secondary
} */
