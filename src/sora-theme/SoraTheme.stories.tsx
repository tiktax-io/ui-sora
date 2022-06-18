import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SoraTheme from './SoraTheme'
import Button from '../button/Button'
import { SoraThemeProps } from './SoraTheme.types'
import darkDefault, { darkBackground } from '../_styles/official_themes/dark_default'
import Navbar from '../navbar/Navbar'
import TiktaxLogo from '../_assets/TiktaxLogo'
import Dashboard from '../dashboard/Dashboard'
import { shadeColor } from '../_utils/colors'
import { black } from '../_styles'
import { NavbarProps } from '../navbar/Navbar.types'
import { SidebarWithTabs } from '../tab/Tab.stories'

export default {
  title: '_Customization/SoraTheme',
  component: SoraTheme,
} as ComponentMeta<typeof SoraTheme>

const GreySquare = () => {
  const squareProperties = {
    style: {
      background: shadeColor(black, 1.5),
      borderRadius: '20px',
      height: '30px',
      width: '100px'
    }
  }
  return (
    <span {...squareProperties} />
  )
}

const ButtonTemplate: ComponentStory<typeof SoraTheme> =
  (args: SoraThemeProps) => (
  <SoraTheme {...args}>
    <div style={{ display: 'flex', gap: '20px' }}>
      <Button>Default</Button>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='success'>Success</Button>
      <Button appearance='danger'>Danger</Button>
    </div>
  </SoraTheme>
)

const NavbarTemplate: ComponentStory<typeof SoraTheme> =
  (args: SoraThemeProps) => (
  <SoraTheme {...args}>
    <Navbar {...args}>
      <TiktaxLogo />
      <GreySquare />
      <GreySquare />
      <GreySquare />
    </Navbar>
  </SoraTheme>
)

const dashboardNavbarProps: NavbarProps = {
  children: <>
    <TiktaxLogo />
    <GreySquare />
    <GreySquare />
    <GreySquare />
  </>,
  color: shadeColor(black, 0.2)
}

const dashboardProps = {
  navbarProps: dashboardNavbarProps
}

const style = {
  height: '500px',
  margin: '85px 5%',
  width: '90%'
}

const DashboardTemplate: ComponentStory<typeof SoraTheme> =
  (args: SoraThemeProps) => (
  <SoraTheme {...args}>
    <Dashboard {...dashboardProps}>
      <div style={style}>Main content</div>
    </Dashboard>
  </SoraTheme>
)

const TabTemplate: ComponentStory<typeof SoraTheme> =
  (args: SoraThemeProps) => {
  const container = {
    background: darkBackground,
    height: '100%',
    left: 0,
    top: 0,
    width: '100%'
  }
  return (
    <div style={container}>
      <SoraTheme {...args}>
        <SidebarWithTabs />
      </SoraTheme>
    </div>
  )
}

export const DarkButtons = ButtonTemplate.bind({})
export const DarkNavbar = NavbarTemplate.bind({})
export const DarkDashboard = DashboardTemplate.bind({})
export const DarkTabs = TabTemplate.bind({})

DarkButtons.parameters = {
  backgrounds: { default: 'dark' }
}

DarkButtons.args = {
  theme: darkDefault
}

DarkNavbar.parameters = {
  backgrounds: { default: 'dark' }
}

DarkNavbar.args = {
  theme: darkDefault
}

DarkDashboard.args = {
  theme: darkDefault
}

DarkTabs.args = {
  theme: darkDefault
}

DarkTabs.parameters = {
  backgrounds: { default: 'dark' }
}
