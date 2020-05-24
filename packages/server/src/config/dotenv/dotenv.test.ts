import * as dotenv from 'dotenv'
import * as dotEnvConfig from './dotenv'
import { DotenvConfigOutput } from 'dotenv'

jest.mock('dotenv')
describe('dotenv', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules() // this is important - it clears the cache
    jest.clearAllMocks()
    jest.spyOn(global.console, 'log')
    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV
  })
  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should call configureDotEnv with correct path in development env', async () => {
    // Arrange
    process.env.NODE_ENV = 'development'
    const mockDotEnvConfigReturn: DotenvConfigOutput = {
      parsed: {
        NODE_ENV: 'development'
      }
    }
    jest.spyOn(dotenv, 'config').mockReturnValue(mockDotEnvConfigReturn)
    const path = `${__dirname}/.env.development`

    // Act
    dotEnvConfig.configureDotEnv()

    // Assert
    expect(dotenv.config).toHaveBeenCalledTimes(2)
    expect(dotenv.config).toHaveBeenNthCalledWith(2, { path: path })
    expect(console.log).toHaveBeenCalledWith('System environment variables loaded from /.env.development')
  })

  it('should call configureDotEnv with correct path in testing env', async () => {
    // Arrange
    process.env.NODE_ENV = 'test'
    const mockDotEnvConfigReturn: DotenvConfigOutput = {
      parsed: {
        NODE_ENV: 'test'
      }
    }
    jest.spyOn(dotenv, 'config').mockReturnValue(mockDotEnvConfigReturn)
    const path = `${__dirname}/.env.test`

    // Act
    dotEnvConfig.configureDotEnv()

    // Assert
    expect(dotenv.config).toHaveBeenCalledTimes(2)
    expect(dotenv.config).toHaveBeenNthCalledWith(2, { path: path })
    expect(console.log).toHaveBeenCalledWith('System environment variables loaded from /.env.test')
  })

  it('should call configureDotEnv with correct path in production env', async () => {
    // Arrange
    process.env.NODE_ENV = 'production'
    const mockDotEnvConfigReturn: DotenvConfigOutput = {
      parsed: {
        NODE_ENV: 'production'
      }
    }
    jest.spyOn(dotenv, 'config').mockReturnValue(mockDotEnvConfigReturn)
    const path = `${__dirname}/.env.production`

    // Act
    dotEnvConfig.configureDotEnv()

    // Assert
    expect(dotenv.config).toHaveBeenCalledTimes(2)
    expect(dotenv.config).toHaveBeenNthCalledWith(2, { path: path })
    expect(console.log).toHaveBeenCalledWith('System environment variables loaded from /.env.production')
  })

  it('should throw error if config function returns error object', async () => {
    // Arrange
    const mockError = {
      message: 'message',
      name: 'name'
    }
    const mockDotEnvConfigReturn: DotenvConfigOutput = {
      error: mockError
    }
    jest.spyOn(dotenv, 'config').mockReturnValue(mockDotEnvConfigReturn)

    try {
      // Act
      await dotEnvConfig.configureDotEnv()
    } catch (error) {
      // Assert
      expect(error).toEqual(new Error('Please define NODE_ENV system environment variable as \'development\', \'test\' or \'production\''))
    }
  })
})
