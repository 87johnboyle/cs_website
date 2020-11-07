import './styles/global.css'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';

export default function App({ Component, pageProps }) {

  //set up apollo client for app

  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql"
  })
    return (
    <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
    )  
}
