import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import TiktaxLogo from '../_assets/TiktaxLogo'

import Navbar from './Navbar'

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

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

const Template: ComponentStory<typeof Navbar> = (args: any) => (
  <Navbar {...args}>
    <TiktaxLogo />
    <GreySquare />
    <GreySquare />
    <GreySquare />
  </Navbar>
)

const MobileTemplate: ComponentStory<typeof Navbar> = (args: any) => (
  <Navbar {...args}>
    <TiktaxLogo />
    <GreySquare />
    <GreySquare />
    <GreySquare />
  </Navbar>
)

export const Desktop = Template.bind({})
export const Mobile = MobileTemplate.bind({})
export const DesktopWithHambMenu = Template.bind({})
export const MobileNoHambMenu = MobileTemplate.bind({})

const commonArguments = {
  onHamburgerMenuClick: () => console.log('Clicked')
}

const commonParameters = {
  backgrounds: { default: 'dark' }
}

const mobileParameters = {
  display: 'flex',
  justifyContent: 'center',
  viewport: {
    defaultViewport: 'iphonex',
    viewports: INITIAL_VIEWPORTS
  }
}

Desktop.parameters = {
  ...commonParameters,
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
}

Mobile.parameters = {
  ...commonParameters,
  ...mobileParameters
}

DesktopWithHambMenu.parameters = {
  ...commonParameters,
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
}

MobileNoHambMenu.parameters = {
  ...commonParameters,
  ...mobileParameters
}

Desktop.args = {
  ...commonArguments
  // hasHamburgerMenu: true,
}

Mobile.args = {
  ...commonArguments
  // hasHamburgerMenu: true,
}

DesktopWithHambMenu.args = {
  ...commonArguments,
  hasHamburgerMenu: true,
}

MobileNoHambMenu.args = {
  ...commonArguments,
  hasHamburgerMenu: false,
}

