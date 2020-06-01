import { gql } from 'apollo-server'

export const schema = gql`
  scalar Date
  enum Fiat {
    USD,
    EUR
  }
  type CoinValues {
    date: Date,
    value: Float
  }
  type History {
    fiat: Fiat!,
    period: String!,
    values: [CoinValues]!
  }
  type Query {
    history(timeSpan: String!): History!
    ping(): String!
  }
`
