import * as dotenv from 'dotenv'
import * as dotEnvConfig from './dotenv'

jest.mock('dotenv')
describe('dotenv', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules() // this is important - it clears the cache
    jest.clearAllMocks()
    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV
  })
  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should call dotenv.config with correct path in development env', async () => {
    // Arrange
    process.env.NODE_ENV = 'development'
    jest.spyOn(dotenv, 'config')
    const path = `${__dirname}/.env.development`

    // Act
    dotEnvConfig.dotEnvConfig()

    // Assert
    expect(dotenv.config).toHaveBeenCalledTimes(2)
    expect(dotenv.config).toHaveBeenNthCalledWith(2, { path: path })
  })

  it('should call dotenv.config with correct path in testing env', async () => {
    // Arrange
    process.env.NODE_ENV = 'test'
    jest.spyOn(dotenv, 'config')
    const path = `${__dirname}/.env.test`

    // Act
    dotEnvConfig.dotEnvConfig()

    // Assert
    expect(dotenv.config).toHaveBeenCalledTimes(2)
    expect(dotenv.config).toHaveBeenNthCalledWith(2, { path: path })
  })

  it('should call dotenv.config with correct path in production env', async () => {
    // Arrange
    process.env.NODE_ENV = 'production'
    jest.spyOn(dotenv, 'config')
    const path = `${__dirname}/.env.production`

    // Act
    dotEnvConfig.dotEnvConfig()

    // Assert
    expect(dotenv.config).toHaveBeenCalledTimes(2)
    expect(dotenv.config).toHaveBeenNthCalledWith(2, { path: path })
  })
})
