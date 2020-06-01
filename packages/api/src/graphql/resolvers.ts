import { getHistory as history } from '../modules/history/service'

export const resolvers = {
  Query: {
    history,
    ping: (): string => 'pong'
  }
}
