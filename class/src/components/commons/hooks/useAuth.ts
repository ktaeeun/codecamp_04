// 로그인검증 페이지

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/display-name
export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsMyLoading] = useState(true);
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 한 사람만 입장가능합니다");
      router.push("/23-04-login");
    } else {
      setIsMyLoading(false);
    }
  }, []);

  return {
    isLoading: IsMyLoading,
  };
}
