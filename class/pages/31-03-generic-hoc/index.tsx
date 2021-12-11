/* eslint-disable react/display-name */
// 로그인검증 페이지

import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    // const { accessToken } = useContext(GlobalContext);

    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인 한 사람만 입장가능합니다");
        router.push("/23-04-login");
      }
    }, []);

    return <Component {...props} />;
  };
