import { getHistory } from './service'
import * as integration from '../../integrations/blockchain'
import { Response } from '../../integrations/blockchain'
import { Fiat, QueryHistoryArgs } from '../../graphql/types'

jest.mock('../../integrations/blockchain')
describe('getHistory', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call marketPriceChart and returns response', async () => {
    // Arrange
    const mockMarketPriceChartReturn: Response = {
      status: 'status',
      name: 'name',
      unit: Fiat.Eur,
      period: 'period',
      description: 'description',
      values: [{ x: 10, y: 10 }]
    }
    const mockMarketPriceChart = jest.spyOn(integration, 'marketPriceChart')
    mockMarketPriceChart.mockResolvedValue(mockMarketPriceChartReturn)
    const mockObject = {}
    const mockArgs: QueryHistoryArgs = {
      timeSpan: '10y'
    }

    // Act
    const history = await getHistory(mockObject, mockArgs, mockObject, mockObject)

    // Assert
    expect(history).toEqual({ fiat: Fiat.Eur, period: 'period', values: [{ x: 10, y: 10 }] })
  })
})
