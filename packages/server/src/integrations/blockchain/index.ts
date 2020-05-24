import axios from 'axios'
import { Fiat } from '../../graphql/types'
import moment from 'moment'

export interface Response {
  status: string;
  name: string;
  unit: Fiat;
  period: string;
  description: string;
  values: Values[];
}

export interface Values {
  date: Date; value: number;
}

export const marketPriceChart = async (timeSpan: string): Promise<Response> => {
  const historyURL = `${process.env.BLOCKCHAIN_API_URL}/charts/market-price`
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
    if (response.status === 200) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return modifyResponse(response.data)
    } else {
      throw new Error('Cannot get chart data')
    }
  } catch (e) {
    throw new Error(e)
  }
}

const modifyResponse = (responseData: any) => {
  responseData.values = responseData.values.map((value: any) => {
    return {
      date: new Date(moment.unix(value.x).format('YYYY-MM-DD')),
      value: value.y
    }
  })
  return responseData
}
