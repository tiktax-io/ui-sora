/* eslint-disable react/no-unknown-property */
import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import Icon from './Icon'

describe('Icon', () => {

  test('Renders different icons when specifying with "icon" props', () => {
    const tree = renderer
      .create(<Icon icon='dashboard' title='Icon1' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Color and SVG title can be modified specifying it as prop', () => {
    const tree = renderer
      .create(
        <>
          <Icon color='#0070AC' icon='wallet' title='Wallet1' />
          <Icon color='#0070AC' icon='wallet' title='Wallet2' />
          <Icon color='#c9d1d9' icon='wallet' title='Wallet3' />
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Width and height can be modified', () => {
    const tree = renderer
      .create(<Icon icon='dashboard' size={100} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })  

})

