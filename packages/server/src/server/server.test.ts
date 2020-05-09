import { Server } from './server'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from '../graphql/typeDefs'
import { resolvers } from '../graphql/resolvers'

jest.mock('apollo-server')

describe('server', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create server with typeDefs and resolvers', () => {
    // Arrange & Act
    const server = new Server()

    // Assert
    expect(ApolloServer).toHaveBeenCalledWith({ typeDefs, resolvers })
  })

  it('should call ApolloServer.listen() and console.log(Server is 🚀 at )', async () => {
    // Arrange
    const listen = ApolloServer.prototype.listen = jest.fn().mockResolvedValue({ url: 'http://localhost:4000' })
    const log = console.log = jest.fn()

    // Act
    const server = new Server()
    await server.start()

    // Assert
    expect(listen).toHaveBeenCalledTimes(1)
    expect(log).toHaveBeenCalledTimes(1)
    expect(log).toHaveBeenCalledWith('Server is 🚀 at http://localhost:4000')
  })

  it('should throw error if ApolloServer.listen promise fails', async () => {
    // Arrange
    ApolloServer.prototype.listen = jest.fn().mockRejectedValue('Server failed to listen')

    // Act
    const server = new Server()

    // Assert
    await expect(server.start()).rejects.toEqual(new Error('Server failed to listen'))
  })
})
