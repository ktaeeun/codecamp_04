import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import LoginUI from "./login.presenter";
import { LOGIN_USER } from "./login.queris";

export default function Login() {
  const [loginUser] = useMutation(LOGIN_USER);
  const { accessToken, setAccessToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  function onChangeEmail(event: any) {
    setMyEmail(event.target.value);
  }

  function onChangePassword(event: any) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: myEmail,
          password: myPassword,
        },
      });
      // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken || "");
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }
  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
