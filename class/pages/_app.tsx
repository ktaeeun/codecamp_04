import { Global } from "@emotion/react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
// 수업시작시 주석해제
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { graphql } from "graphql";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

// import Head from "next/head";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzu5Dh7ocjox_KmI9cbOkjSiw1Z02BMMk",
  authDomain: "codecamp-kimtaeeun.firebaseapp.com",
  projectId: "codecamp-kimtaeeun",
  storageBucket: "codecamp-kimtaeeun.appspot.com",
  messagingSenderId: "175103441484",
  appId: "1:175103441484:web:b33bca9141f95904a5d2e9",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
  setUserInfo?: Dispatch<SetStateAction<String>>;
}

// 여기까지
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: setMyUserInfo,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setMyAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setMyAccessToken); // 새로고침할때마다 토큰이 날라감
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. refreshToken으로 accessToken 재발급 받기 -> resotreAccessToken
          //  const newAccessToken = getAccessToken(setMyAccessToken)

          // 3. 기존에 실패한 요청 다시 재요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`,
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
      authorization: `Bearer ${myAccessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return (
    <>
      {/* <Head> 모든 페이지에서 카카오맵을 다운로드받으므로 비효율적임
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=46cb9b27077ed3d6e977b8b172dbe1f1"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
