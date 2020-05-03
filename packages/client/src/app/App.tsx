import React from 'react';
import { gql } from 'apollo-boost';
import './App.css';
import { useQuery } from "@apollo/react-hooks";

interface BooksList {
    books: Book[];
}

interface Book {
    title: string;
    author: string;
}

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery<BooksList>(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(data && data.books){
      return (<div>
          {data.books.map(({title, author}) => (
              <div key={title}>
                  <p>
                      {title}: {author}
                  </p>
              </div>
          ))}
      </div>);

  }
  return <p>Error :(</p>
};

export default App;
