import { ApolloServer } from 'apollo-server'
import { schema } from '../graphql/schema'
import { resolvers } from '../graphql/resolvers'
import { configureDotEnv } from '../config/dotenv/dotenv'

export class Server {
  public server: ApolloServer;

  constructor () {
    this.loadConfigs()
    this.server = new ApolloServer({ typeDefs: schema, resolvers })
  }

  public start = async (): Promise<void> => {
    try {
      const { url } = await this.server.listen()
      console.log(`Apollo Server is running at ${url}`)
    } catch (e) {
      throw new Error(e)
    }
  }

  public loadConfigs = (): void => {
    configureDotEnv()
  }
}
