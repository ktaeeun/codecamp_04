import BoardCommentListUIItem from "./BoardCommentListPresenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el: any) => (
        <BoardCommentListUIItem key={el._id} el={el} />
      ))}
    </>
  );
}
