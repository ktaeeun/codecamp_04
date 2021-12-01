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
import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { createUploadLink } from "apollo-upload-client";

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    // userInfo: myUserInfo,
    // setUserInfo: setMyUserInfo,
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    if (accessToken) setMyAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
