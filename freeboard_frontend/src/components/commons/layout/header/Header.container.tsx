import { useRouter } from "next/router";
import LayoutHeaderUI from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickLogo() {
    router.push("/boards");

    return "aaa";
  }

  function onClickMoveToLogin() {
    router.push("/login");
  }

  function onClickMoveToSignUp() {
    router.push("/signup");
  }
  // function onClickMoveToMyPage() {
  //   router.push(`/mypage/mymarket`);
  // }

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignUp={onClickMoveToSignUp}
    />
  );
}
