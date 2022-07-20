import React, { ReactElement, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputSelect from './InputSelect'
import Text from '../text/Text'
import { primary } from '../_styles'
import { InputSelectProps } from './InputSelect.types'

export default {
  title: 'Atoms/InputSelect',
  component: InputSelect,
} as ComponentMeta<typeof InputSelect>

/******************************************************************************
 * @returns {InputSelectProps['options']} options to render on select element.
 *****************************************************************************/
const selectOptions: InputSelectProps['options'] = [
  'Bitcoin',
  'Ethereum',
  'Cardano'
]

/******************************************************************************
 * @returns {ReactElement} Storybook documentation example of controlled
 * select element.
 *****************************************************************************/
const Template: ComponentStory<typeof InputSelect> = () => {
  const [value, setValue] = useState<string>(selectOptions[1])
  const inputSelectProps: InputSelectProps = {
    defaultValue: value,
    onChange: (newValue) => {
      setValue(newValue)
      console.log(`new value is ${newValue}`)
    },
    options: selectOptions
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

/******************************************************************************
 * @returns {ReactElement} Storybook documentation example of default
 * InputSelect component with storybook controllers.
 *****************************************************************************/
const Minimal: ComponentStory<typeof InputSelect> = (args: any) =>
  <InputSelect {...args} />

export const Default = Template.bind({})
export const CustomCSS = Minimal.bind({})
export const CustomDefaultValue = Minimal.bind({})

/******************************************************************************
 * Variants with different storybook control options below
 *****************************************************************************/

/******************************************************************************
 * @returns {ReactElement} InputSelect component with custom styles. Passing
 * styles via prop named "css".
 *****************************************************************************/
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

/******************************************************************************
 * @returns {ReactElement} InputSelect component with the default value being
 * different from the first one. Setting default value with "defaultValue"
 * named prop.
 *****************************************************************************/
CustomDefaultValue.args = {
  defaultValue: 'second',
  onChange: () => null,
  options: ['first', 'second', 'third']
}
