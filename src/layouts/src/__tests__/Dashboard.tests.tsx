/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from '../Dashboard'

describe('Dashboard', () => {
  it('Renders its children without crashing', () => {
    expect(() => render(<Dashboard>Testing</Dashboard>)).not.toThrow()
  })
})
