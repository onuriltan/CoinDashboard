import { Server } from './server'
import { ApolloServer } from 'apollo-server'
import { schema } from '../graphql/schema'
import { resolvers } from '../graphql/resolvers'
import * as dotEnvConfig from '../config/dotenv/dotenv'

jest.mock('apollo-server')
jest.mock('../config/dotenv/dotenv')

describe('server', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(dotEnvConfig, 'configureDotEnv')
  })

  it('should create server with schema and resolvers', () => {
    // Arrange & Act
    const server = new Server()

    // Assert
    expect(ApolloServer).toHaveBeenCalledWith({ schema, resolvers })
  })

  it('should call ApolloServer.listen() and console.log(Server is 🚀 at )', async () => {
    // Arrange
    const listen = ApolloServer.prototype.listen = jest.fn().mockResolvedValue({ url: 'http://localhost:4000' })
    // eslint-disable-next-line no-console
    const log = console.log = jest.fn()

    // Act
    const server = new Server()
    await server.start()

    // Assert
    expect(listen).toHaveBeenCalledTimes(1)
    expect(log).toHaveBeenCalledTimes(1)
    expect(log).toHaveBeenCalledWith('Apollo Server is running at http://localhost:4000')
  })

  it('should throw error if ApolloServer.listen promise fails', async () => {
    // Arrange
    ApolloServer.prototype.listen = jest.fn().mockRejectedValue('Server failed to listen')

    // Act
    const server = new Server()

    // Assert
    await expect(server.start()).rejects.toThrow(new Error('Server failed to listen'))
  })
})
