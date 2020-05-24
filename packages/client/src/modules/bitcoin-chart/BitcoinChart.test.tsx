import React from 'react'
import { render, cleanup, wait } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import * as am4core from '@amcharts/amcharts4/core'
import { BitcoinChart } from './BitcoinChart'
import { mockChartObject } from '../../config/test/GlobalMocks'

jest.mock('@amcharts/amcharts4/core')
jest.mock('@amcharts/amcharts4/charts')
const wrappedComponent = () => {
  return (
    <MockedProvider addTypename={false}>
      <BitcoinChart />
    </MockedProvider>
  )
}

describe('<BitcoinChart />', function () {
  afterEach(cleanup)
  it('should render without crashing', async () => {
    jest.spyOn(am4core, 'create').mockImplementation(() => mockChartObject)
    render(wrappedComponent())
    await wait() // wait for mock graphQL response
  })
})
