import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchResults from './SearchResults'
import { black, text } from '../_styles'

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
  },
  {
    field1: 'Title3',
    field2: 'Text3'
  },
  {
    field1: 'Title4',
    field2: 'Text4'
  }
]

type DemoCardTypes = {
  field1: string
  field2: string
}

const DemoCard = (props: DemoCardTypes) => {
  return (
    <>
      <h1>{props.field1}</h1>
      <h1>{props.field2}</h1>
    </>
  )
}

export const Default = Template.bind({})

const sidebarStyles = {
  background: 'white',
  borderRadius: '15px',
  height: '827px',
  width: '100%'
}

Default.parameters = {
  backgrounds: { default: 'light' },
}

Default.args = {
  children: demoContent.map((element) =>
    // eslint-disable-next-line react/jsx-key
    <DemoCard field1={element.field1} field2={element.field2} />
  ),
  resultsMessage:
    <p>
      <span style={{ fontWeight: 600 }}>1894</span> results for <span style={{ fontWeight: 600 }}>accounting firms in barcelona</span>
    </p>,
  sidebar: <div style={sidebarStyles}>sidebar content</div>
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
