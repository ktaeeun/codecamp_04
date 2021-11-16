import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";

import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    // variables: {
    //   boardId: event.target.id,
    // },
    // refetchQueries: [
    //   {
    //     query: FETCH_BOARD,
    //     variables: { boardId: router.query.number },
    //   },
    // ],
  });

  function onClickMoveToList() {
    router.push("/boards");
  }

  function onClickMoveToUpdate() {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.boardId } });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  async function onClickLike(event: any) {
    await likeBoard({
      variables: {
        boardId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.number },
        },
      ],
    });
    alert("좋아요");
  }

  async function onClickDislike(event: any) {
    await dislikeBoard({
      variables: {
        boardId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.number },
        },
      ],
    });
    alert("싫어요");
  }

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
