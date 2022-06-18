import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tab from './Tab'
import { FlexDirection } from '../_types/global'

export default {
  title: 'Atoms/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>

const columnDirection: FlexDirection = 'column'

const container = {
  borderRadius: '6px',
  // boxShadow: '2px 2px 20px 4px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: columnDirection,
  gap: 20,
  padding: '40px 20px',
  width: '280px'
}

const Template: ComponentStory<typeof Tab> = (args: any) => (
  <div style={container}>
    <Tab {...args}>Dashboard</Tab>
  </div>
)

export const Default = Template.bind({})
export const Selected = Template.bind({})
export const IconAfter = Template.bind({})
export const IconBefore = Template.bind({})

const commonArgs = {
  onClick: () => console.log('Tab clicked')
}

Default.args = {
  ...commonArgs,
  isSelected: false
}

Selected.args = {
  ...commonArgs,
  isSelected: true
}
