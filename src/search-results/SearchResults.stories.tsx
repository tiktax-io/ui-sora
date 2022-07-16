import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchResults from './SearchResults'
import { inputGlobalStyles } from '../_styles'
import Button from '../button/Button'
import { createUseStyles } from 'react-jss'

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
  const style = {
    container: {
      background: 'white',
      borderRadius: '15px',
      height: '100%',
      width: '100%'
    }
  }

  return (
    <div style={style.container}>
      <h1>{props.field1}</h1>
      <h1>{props.field2}</h1>
    </div>
  )
}

const SearchBar = () => {
  const style = {
    container: {
      alignItems: 'center',
      background: 'white',
      borderRadius: '15px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      height: '100%',
      justifyContent: 'space-between',
      left: 0,
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '20px',
      paddingBottom: '20px',
      position: 'relative',
      width: 'auto'
    },
    inputComponent: {
      ...inputGlobalStyles.container,
      flex: 2,
      minWidth: '200px',
      width: '100%'
    },
    button: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end'
    }
  }
  const useStyles = createUseStyles(style)
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <input className={classes.inputComponent} type='text' placeholder='Search..' />
      <select style={style.inputComponent} placeholder='City..'>
        <option value='one'>Tokyo</option>
        <option value='one'>Barcelona</option>
        <option value='one'>New York</option>
      </select>
      <div style={style.button}>
        <Button appearance='primary'>Search</Button>
      </div>
    </div>
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
    <p style={{ fontFamily: '"Inter", sans-serif' }}>
      <span style={{ fontWeight: 600 }}>1894</span> results for <span style={{ fontWeight: 600 }}>accounting firms in barcelona</span>
    </p>,
  searchbar: <SearchBar />,
  sidebar: <div style={sidebarStyles}>sidebar content</div>
}
