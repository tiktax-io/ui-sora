import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SearchResults from './SearchResults'
import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'
import { SearchResultsProps } from './SearchResults.types'

describe('SearchResults layout', () => {

  /****************************************************************************
   * Reset DOM after each test
   ***************************************************************************/
  const container = document.createElement('div')
  beforeEach(() => {
    document.body.appendChild(container)
  })  
  afterEach(() => {
    document.body.removeChild(container)
  })

  test('Renders children elements', () => {
    const results = [
      'Hola',
      'Adios'
    ]
    render(<SearchResults>{results}</SearchResults>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })

  test('Results message is rendered when provided', () => {
    render(
      <SearchResults resultsMessage='I am rendered'>
        {['one','two']}
      </SearchResults>
    )
    const resultsMessage = screen.getByText(/I am rendered/i)
    expect(resultsMessage).toBeInTheDocument()
  })

  test('Searchbar component is rendered when provided', () => {
    render(
      <SearchResults searchbar={<span>searchresults searchbar here</span>}>
        {['one','two']}
      </SearchResults>
    )
    const searchBar = screen.getByText(/searchresults searchbar here/i)
    expect(searchBar).toBeInTheDocument()
  })

  test('Sidebar is rendered when provided', () => {
    render(
      <SearchResults searchbar={<span>sidebar here</span>}>
        {['one','two']}
      </SearchResults>
    )
    const sidebar = screen.getByText(/sidebar here/i)
    expect(sidebar).toBeInTheDocument()
  })

  /****************************************************************************
   * Testing responsiveness below.
   ***************************************************************************/
  const props: SearchResultsProps = {
    children: ['one', 'two'],
    displayAs: 'cards',
    resultsMessage: <span>Result message here</span>,
    searchbar: <span>searchbar here</span>,
    sidebar: <span>sidebar here</span>
  }

  test('Snapshot on desktop screens are matched', () => {
    /**************************************************************************
     * Resizing to desktop screens.
     *************************************************************************/
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1500
      })
      fireEvent.resize
    })

    const tree = renderer
      .create(
        <SearchResults {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: defaultWidth
    })
    fireEvent.resize
  })

  test('Snapshot on tablet screens are matched', () => {
    /**************************************************************************
     * Resizing to tablet screens.
     *************************************************************************/
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1100
      })
      fireEvent.resize
    })

    const tree = renderer
      .create(
        <SearchResults {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: defaultWidth
    })
    fireEvent.resize
  })

  test('Snapshot on smartphone screens are matched', () => {
    /**************************************************************************
     * Resizing to smartphone screens.
     *************************************************************************/
    const defaultWidth = window.innerWidth
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 400
      })
      fireEvent.resize
    })

    const tree = renderer
      .create(
        <SearchResults {...props}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: defaultWidth
    })
    fireEvent.resize
  })

})
