import axios from 'axios'
import { BLOCKCHAIN_API_URL } from '../../config/dotenv'
import { Fiat } from '../../graphql/types'

interface Response {
  status: string;
  name: string;
  unit: Fiat;
  period: string;
  description: string;
  values: Values[];
}

interface Values {
  x: number; y: number;
}

export const marketPriceChart = async (timeSpan: string): Promise<Response> => {
  const historyURL = `${BLOCKCHAIN_API_URL}/charts/market-price`
  try {
    const response = await axios({
      url: historyURL,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        timespan: timeSpan,
        sampled: true,
        metadata: false,
        cors: true,
        format: 'json'
      }
    })
    return response.data
  } catch (e) {
    throw new Error(e)
  }
}
