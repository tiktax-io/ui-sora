import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Dashboard from './Dashboard'

storiesOf('layouts', module).add('Dashboard', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Dashboard sidebar={<h1>sidebar content</h1>}>Content of the Dashboard here</Dashboard>
  </Box>
))
