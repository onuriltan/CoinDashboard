import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import { App } from './App'

jest.mock('@amcharts/amcharts4/core')
jest.mock('@amcharts/amcharts4/charts')
jest.mock('../modules/bitcoin-chart/BitcoinChart', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/display-name
    BitcoinChart: () => {
      return <div/>
    }
  }
})
const wrappedComponent = () => {
  return (
    <MockedProvider addTypename={false}>
      <App />
    </MockedProvider>
  )
}

describe('<App />', function () {
  afterEach(cleanup)
  it('should render without crashing', async () => {
    render(wrappedComponent())
  })
})
