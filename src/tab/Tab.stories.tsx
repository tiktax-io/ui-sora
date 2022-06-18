import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tab from './Tab'
import { FlexDirection } from '../_types/global'
import Icon from '../icon/Icon'
import { IconName, IconProps } from '../icon/Icon.types'
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

/******************************************************************************
 * @returns {Array<TabOption>} Array of refactorized options of each Tab
 * component. The array of which is supposed to be mapped to display it.
 *****************************************************************************/
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

/******************************************************************************
 * @returns ReactElement. Sidebar Div as demo of side navigation on Dashboards.
 *****************************************************************************/
export const SidebarWithTabs: ComponentStory<typeof Tab> = () => {
  const [isSelected, setIsSelected] = useState(0)
  const handleTabClick = (tab: TabOption, key: number) => {
    setIsSelected(key)
    tab?.onClick && tab.onClick()
  }

  const tabProps = (tab: TabOption, i: number) =>({
    isSelected: isSelected === i,
    onClick: () => handleTabClick(tab, i)
  })

  const iconProps = (tab: TabOption, i: number): IconProps => ({
    color: isSelected === i ? primary : undefined,
    icon: tab.icon || 'dashboard'
  })

  return (
    <div style={container}>
      {tabOptions.map((tab, i) => (
        <Tab key={i} {...tabProps(tab, i)}>
          <Icon {...iconProps(tab, i)} />
          <span>{tab?.label}</span>
        </Tab>
      ))}
    </div>
  )
}

export const Default = Template.bind({})
export const Selected = Template.bind({})

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
