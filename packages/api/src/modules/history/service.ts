import { History, QueryHistoryArgs } from '../../graphql/types'
import { marketPriceChart } from '../../integrations/blockchain'

export const getHistory = async (obj: any, args: QueryHistoryArgs, context: any, _: any): Promise<History> => {
  const { timeSpan } = args
  const marketPriceHistory = await marketPriceChart(timeSpan)
  return {
    fiat: marketPriceHistory.unit,
    period: marketPriceHistory.period,
    values: marketPriceHistory.values
  }
}
