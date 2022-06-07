import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SoraTheme from './SoraTheme'
import Button from '../button/Button'
import { SoraThemeProps } from './SoraTheme.types'
import darkDefault from '../_styles/official_themes/dark_default'
import Navbar from '../navbar/Navbar'
import TiktaxLogo from '../_assets/TiktaxLogo'

export default {
  title: '_Customization/SoraTheme',
  component: SoraTheme,
} as ComponentMeta<typeof SoraTheme>

const GreySquare = () => {
  const squareProperties = {
    style: {
      background: 'grey',
      borderRadius: '20px',
      height: '40px',
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

export const DarkButtons = ButtonTemplate.bind({})
export const DarkNavbar = NavbarTemplate.bind({})

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
