import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from './Text'
import { TextProps } from './Text.types'

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

// eslint-disable-next-line storybook/prefer-pascal-case
export const demoText: {[index: number | string]: string} = {
  5: 'Landing header call to action',
  4: 'Exceptional titles except landing cta',
  3: 'Regular titles on pages and headers',
  2: 'Card titles and other immediate parents of base text',
  1: 'Base text that requires special attention',
  0: 'Base text like paragraphs and data displayed on tables',
  '-1': 'Small text like picture captions and disclaimers',
  '-2': 'Legal conditions titles and special words',
  '-3': 'Legal conditions that are not necessary to display on normal size'
}

const Template: ComponentStory<typeof Text> = (args: TextProps) =>
  <Text {...args}>
    {demoText[args.size || 0]}
  </Text>

/******************************************************************************
 * Default Text component with minimal props specified.
 * @returns {ReactElement<HTMLSpanElement>} Span element containing the text
 * "Base text like paragraphs and data displayed on tables"
 *****************************************************************************/
export const Default = Template.bind({})
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
} */

/* Default.args = {
  size:
} */

/* export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Text',
  variant: TextVariants.secondary
} */
