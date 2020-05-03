import { Server } from './server'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from '../graphql/typeDefs'
import { resolvers } from '../graphql/resolvers'

jest.mock('apollo-server')

describe('server', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it('should create server with typeDefs and resolvers', () => {
    // Arrange

    // Act
    const server = new Server()

    // Assert
    expect(ApolloServer).toHaveBeenCalledWith({ typeDefs, resolvers })
  })
})
