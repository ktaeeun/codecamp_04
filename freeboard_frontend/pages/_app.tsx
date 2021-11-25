import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { createContext, useState, useEffect } from "react";
import { createUploadLink } from "apollo-upload-client";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <GlobalContext.Provider value={value}> */}
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
      {/* </GlobalContext.Provider> */}
    </>
  );
}

export default MyApp;
