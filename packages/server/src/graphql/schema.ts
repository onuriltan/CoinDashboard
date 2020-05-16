import { gql } from 'apollo-server'

export const schema = gql`
  enum Fiat {
    USD,
    EUR
  }
  type CoinValues {
    x: Float,
    y: Float
  }
  type History {
    fiat: Fiat!,
    period: String!,
    values: [CoinValues]!
  }
  type Query {
    history(timeSpan: String!): History!
  }
`
