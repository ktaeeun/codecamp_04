import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const client = useApolloClient();

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });

    const accessToken = result.data?.loginUser.accessToken || "";
    localStorage.setItem("accessToken", accessToken);

    setAccessToken?.(accessToken);
    // 여기서 setAccessToken 필요 (글로벌 스테이트에서 app.tsx)

    // localStorage.setItem("accessToken", accessToken);
    // const result = await.axios.get("koreanjson.com/posts/1") 이러한 방식으로 원하는 곳에서 usequery 필요

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    setUserInfo(resultUserInfo.data.fetchUserLoggedIn);

    // 로그인 성공된 페이지로 이동시키기
    router.push("/24-02-login-success");
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeMyEmail} />
      비밀번호: <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인 하기</button>
    </>
  );
}
