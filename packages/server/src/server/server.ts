import { ApolloServer } from 'apollo-server'
import { schema } from '../graphql/schema'
import { resolvers } from '../graphql/resolvers'
import { dotEnvConfig } from '../config/dotenv/dotenv'

export class Server {
  public server: ApolloServer;

  constructor () {
    this.server = new ApolloServer({ typeDefs: schema, resolvers })
    this.loadConfigs()
  }

  public start = async (): Promise<void> => {
    try {
      const { url } = await this.server.listen()
      console.log(`Server is 🚀 at ${url}`)
    } catch (e) {
      throw new Error(e)
    }
  }

  public loadConfigs = (): void => {
    dotEnvConfig()
  }
}
