import { createContext, useState, useEffect } from "react";
import "antd/dist/antd.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-quill/dist/quill.snow.css";
import { onError } from "@apollo/client/link/error";

import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import Layout from "../src/components/commons/layout";
import { getAccessToken } from "../src/commons/getAccessToken";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // setAccessToken(accessToken);
    //* 이 두줄은 로컬스토리지에 저장하는 방법
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include", // 이걸 안쓰면 쿠키가 안들어 왔다.
    // 탬플릿 리터널 (변수와 문자 같이쓰는방법)
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
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
