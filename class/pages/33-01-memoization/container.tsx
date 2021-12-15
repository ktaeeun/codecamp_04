import { useCallback, useMemo, useState } from "react";
import MemoizaitionPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 랜더링됩니다");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // usememo를 usecallback처럼 쓰는법
  const randomValue = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);
  console.log(randomValue);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1
  }, []);

  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>====================</div>
      <div>이것은 컨테이너입니다</div>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
      <div>====================</div>
      <MemoizaitionPresenterPage countState={countState} />
    </>
  );
}

// usememo는 값을 기억해버림
