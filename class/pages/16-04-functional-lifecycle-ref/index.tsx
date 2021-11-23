import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyLifecyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  //   const [writer, setWriter] = useState("철수");

  // componentDidMount와 동일
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();

    // componentWillUnMount와 동일
    return () => {
      console.log("잘가요");
    };
  }, []); // 하나라도 바뀌면 다시 실행

  // componentDidupdate와 비슷
  useEffect(() => {
    console.log("수정됨");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }
  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재 카운트 {count}</div>
      <button onClick={onClickCounter}>페인지 카운트</button>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
