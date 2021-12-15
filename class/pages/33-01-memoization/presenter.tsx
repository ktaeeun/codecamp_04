import { memo } from "react";
function MemoizaitionPresenterPage(props) {
  console.log("프리젠터가 렌더링됩니다");
  return (
    <>
      <div>====================</div>
      <div>이것은 프리젠터입니다</div>
      <div>====================</div>
    </>
  );
}

export default memo(MemoizaitionPresenterPage);
