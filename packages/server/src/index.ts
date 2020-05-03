import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Query {
      books: [Book]
    }
`

interface Book {
  title: string;
  author: string;
}

const books: Book[] = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

const resolvers = {
  Query: {
    books: (): Book[] => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`)
})
