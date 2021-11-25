import { Global } from "@emotion/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";

// 수업시작시 주석해제
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// 여기까지

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBC_IuVQ1nuhZaMRbzFEW3zYN3Qmz1HksM",
//   authDomain: "login-9405.firebaseapp.com",
//   projectId: "login-9405",
//   storageBucket: "login-9405.appspot.com",
//   messagingSenderId: "330934260214",
//   appId: "1:330934260214:web:720c6972c2a3c13eacb7d7",
// };

// // Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
