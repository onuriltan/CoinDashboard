import React from 'react'
import { render, cleanup, wait } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import { App, BOOKS } from './App'

const mocks = [
  {
    request: {
      query: BOOKS
    },
    result: {
      data: {
        books: [
          {
            title: 'Jurassic Park',
            author: 'Michael Crichton'
          }
        ]
      }
    }
  }
]

const wrappedComponent = (mocks: any) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  )
}

describe('<App />', function () {
  afterEach(cleanup)

  it('renders learn react link', async () => {
    // Arrange & Act
    const { getByTestId } = render(wrappedComponent(mocks))
    await wait() // wait for mock graphQL response
    const book = getByTestId('Jurassic Park: Michael Crichton')

    // Assert
    expect(book).toBeInTheDocument()
  })
})
