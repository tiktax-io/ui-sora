import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Navbar } from '../../navbar'

storiesOf('navbar', module).add('Navbar', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Navbar>Navbar</Navbar>
  </Box>
))
