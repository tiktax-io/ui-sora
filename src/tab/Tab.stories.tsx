import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tab from './Tab'
import { FlexDirection } from '../_types/global'
import Icon from '../icon/Icon'
import { IconName } from '../icon/Icon.types'
import { primary } from '../_styles'

export default {
  title: 'Atoms/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>

const columnDirection: FlexDirection = 'column'

const container = {
  borderRadius: '6px',
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

interface TabOption {
  label?: string
  icon?: IconName
  onClick?: () => void | undefined
}

type TabOptionsList = Array<TabOption>

const tabOptions: TabOptionsList = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    onClick: () => console.log('clicked dashboard')
  },
  {
    label: 'My transactions',
    icon: 'time',
    onClick: () => console.log('clicked time')
  },
  {
    label: 'Wallets',
    icon: 'wallet',
    onClick: () => console.log('clicked wallet')
  },
  {
    label: 'Integrations',
    icon: 'integrations',
    onClick: () => console.log('clicked integrations')
  },
  {
    label: 'Settings',
    icon: 'settings',
    onClick: () => console.log('clicked settings')
  }
]

const SidebarTemplate: ComponentStory<typeof Tab> = () => {
  const [isSelected, setIsSelected] = useState(0)
  const handleTabClick = (tab: TabOption, key: number) => {
    setIsSelected(key)
    tab?.onClick && tab.onClick()
  }

  return (
    <div style={container}>
      {tabOptions.map((tab, i) => (
        <Tab key={i} isSelected={isSelected === i} onClick={() => handleTabClick(tab, i)}>
          <Icon color={isSelected === i ? primary : undefined} icon={tab.icon || 'dashboard'} />
          <span>{tab?.label}</span>
        </Tab>
      ))}
    </div>
  )
}

export const Default = Template.bind({})
export const Selected = Template.bind({})
export const SidebarWithTabs = SidebarTemplate.bind({})

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
