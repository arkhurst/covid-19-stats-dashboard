import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Main from './Main';

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://covid19-graphql.netlify.app/' }),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
     <Main />
    </ApolloProvider>
  );
}

