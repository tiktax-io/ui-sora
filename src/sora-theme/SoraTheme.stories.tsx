import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SoraTheme from './SoraTheme'
import Button from '../button/Button'
import { SoraThemeProps } from './SoraTheme.types'
import darkDefault from '../_styles/official_themes/dark_default'

export default {
  title: 'Customization/SoraTheme',
  component: SoraTheme,
} as ComponentMeta<typeof SoraTheme>

const Template: ComponentStory<typeof SoraTheme> =
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

export const DarkButtons = Template.bind({})
DarkButtons.parameters = {
  backgrounds: { default: 'dark' }
}

DarkButtons.args = {
  theme: darkDefault
}
