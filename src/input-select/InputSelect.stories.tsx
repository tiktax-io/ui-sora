import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputSelect from './InputSelect'
import { InputSelectProps } from './InputSelect.types'
import Text from '../text/Text'
import { primary } from '../_styles'

export default {
  title: 'Atoms/InputSelect',
  component: InputSelect,
} as ComponentMeta<typeof InputSelect>

const selectOptions: InputSelectProps['options'] = [
  'Bitcoin',
  'Ethereum',
  'Cardano'
]

const Template: ComponentStory<typeof InputSelect> = (...args: any) => {
  const [value, setValue] = useState<string | number>(selectOptions[1])
  const inputSelectProps: InputSelectProps = {
    onChange: (newValue) => {
      setValue(newValue)
      console.log(`new value is ${newValue}`)
    },
    options: selectOptions,
    defaultValue: value
  }

  return (
    <>
      <Text size={3}>Controlled Select</Text>
      <Text element='paragraph'>
        The default value is the second element in the array.
        The select element is controlled.
      </Text>
      <InputSelect {...inputSelectProps} />
    </>
  )
}

const Minimal: ComponentStory<typeof InputSelect> = (args: any) =>
  <InputSelect {...args} />

export const Default = Template.bind({})
export const CustomCSS = Minimal.bind({})

CustomCSS.args = {
  css: {
    background: primary
  },
  defaultValue: selectOptions[1],
  onChange: (newValue) => {
    console.log(newValue)
    console.log(`new value is ${newValue}`)
  },
  options: selectOptions,
}
