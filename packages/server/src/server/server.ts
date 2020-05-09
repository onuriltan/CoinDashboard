import { ApolloServer } from 'apollo-server'
import { typeDefs } from '../graphql/typeDefs'
import { resolvers } from '../graphql/resolvers'

export class Server {
  public server: ApolloServer;

  constructor () {
    this.server = new ApolloServer({ typeDefs, resolvers })
  }

  public start = async (): Promise<void> => {
    try {
      const { url } = await this.server.listen()
      // eslint-disable-next-line no-console
      console.log(`Server is 🚀 at ${url}`)
    } catch (e) {
      throw new Error(e)
    }
  }
}
