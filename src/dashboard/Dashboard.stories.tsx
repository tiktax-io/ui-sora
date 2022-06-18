import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Dashboard from './Dashboard'
import TiktaxLogo from '../_assets/TiktaxLogo'

export default {
  title: 'Layouts/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>

const GreySquare = () => {
  const squareProperties = {
    style: {
      background: 'grey',
      borderRadius: '20px',
      height: '30px',
      width: '100px'
    }
  }
  return (
    <span {...squareProperties} />
  )
}

const Template: ComponentStory<typeof Dashboard> = (args: any) => {
  const style = {
    background: 'white',
    height: '500px',
    margin: '85px 5%',
    width: '90%'
  }

  return (
    <Dashboard {...args}>
      <div style={style}>
        Main content
      </div>
    </Dashboard>
  )
}

export const Default = Template.bind({})
export const NarrowScreen = Template.bind({})

const SidebarChildren = () => {
  const style = {
    background: 'grey',
    marginTop: '65px',
    width: '100%'
  }

  return (
    <div style={style}>
      Sidebar content
    </div>
  )
}

const commonArgs = {
  navbarProps: {
    children: <><TiktaxLogo /><GreySquare /><GreySquare /></>
  },
  sidebarChildren: <SidebarChildren />
}

Default.args = {
  ...commonArgs
}

NarrowScreen.args = {
  ...commonArgs
}

NarrowScreen.parameters = {
  viewport: {
    defaultViewport: 'ipad',
    viewports: INITIAL_VIEWPORTS
  }
}
