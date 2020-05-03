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

export const resolvers = {
  Query: {
    books: (): Book[] => books
  }
}
