import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchResults from './SearchResults'

export default {
  title: 'Layouts/SearchResults',
  component: SearchResults,
} as ComponentMeta<typeof SearchResults>

const Template: ComponentStory<typeof SearchResults> = (args: any) => <SearchResults {...args} />

const demoContent = [
  {
    field1: 'Title1',
    field2: 'Text1'
  },
  {
    field1: 'Title2',
    field2: 'Text2'
  }
]

type DemoCardTypes = {
  field1: string
  field2: string
}

const DemoCard = (props: DemoCardTypes) => {
  return (
    <div>
      <h1>{props.field1}</h1>
      <h1>{props.field2}</h1>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  // eslint-disable-next-line react/jsx-key
  children: demoContent.map((element) => <DemoCard field1={element.field1} field2={element.field2} />)
}

/* Primary.args = {
  label: 'SearchResults',
  variant: SearchResultsVariants.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'SearchResults',
  variant: SearchResultsVariants.secondary
} */
