import BoardDetail from "../../../src/components/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/BoardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/BoardComment/write/BoardCommentWrite.container";

export default function BoardDetailUI() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
