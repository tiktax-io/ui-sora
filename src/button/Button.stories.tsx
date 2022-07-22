import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'
import { createUseStyles, ThemeProvider } from 'react-jss'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    appearance: {
      options: ['default', 'primary', 'success', 'danger'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Button>

const customTheme = {
  Button: {
    default_container: {
      background: 'lime',
      border: 'green',
      borderRadius: '4px',
      padding: '20px'
    },
    default_label: {
      color: 'white',
      fontSize: '20px'
    }  
  }
}

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />

const ByAppearanceTemplate: ComponentStory<typeof Button> = (args: any) => {
  const styles = {
    container: {
      display: 'flex',
      gap: '40px'
    }
  }
  const useStyles = createUseStyles(styles)
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Button appearance='default'>Default</Button>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='success'>Success</Button>
      <Button appearance='danger'>Danger</Button>
    </div>
  )
}

const Custom: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
    <ThemeProvider theme={customTheme}>
      <Button {...args}>Customized</Button>
    </ThemeProvider>
    <Button {...args}>Default1</Button>
    <Button {...args}>Default2</Button>
  </div>
)

export const ByAppearance = ByAppearanceTemplate.bind({})
export const Default = Template.bind({})
export const Primary = Template.bind({})
export const Success = Template.bind({})
export const Danger = Template.bind({})
export const Disabled = Template.bind({})
export const CustomButton = Custom.bind({})

Default.args = {
  children: 'Default'
}

Primary.args = {
  appearance: 'primary',
  children: 'Primary'
}

Success.args = {
  appearance: 'success',
  children: 'Success'
}

Danger.args = {
  appearance: 'danger',
  children: 'Danger'
}

Disabled.args = {
  appearance: 'default',
  children: 'Disabled',
  disabled: true
}

