import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import * as serviceWorker from './serviceWorker'
import { App } from './app/App'
import './index.css'

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URL}`
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
