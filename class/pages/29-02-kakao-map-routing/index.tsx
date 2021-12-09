import { useRouter } from "next/router";

export default function KakaoMapRoutingPage() {
  const router = useRouter();

  const onclickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };

  return <button onClick={onclickMoveToMap}>맵으로 이동하기</button>;
}
