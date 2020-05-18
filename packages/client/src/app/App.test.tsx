import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import * as am4core from '@amcharts/amcharts4/core'
import { App } from './App'
import { mockChartObject } from '../config/test/GlobalMocks'

jest.mock('@amcharts/amcharts4/core')
jest.mock('@amcharts/amcharts4/charts')
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
    jest.spyOn(am4core, 'create').mockImplementation(() => mockChartObject)
    render(wrappedComponent())
  })
})
