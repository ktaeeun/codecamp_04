import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { useState, MouseEvent } from "react";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export default function PaginationBasicPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD, {
    variables: { page: startPage },
  });

  // 1. 마지막페이지(+ 전체 게시글 갯수)
  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 0;

  function onClickPrevPage() {
    // 이전페이지 0보다 작으면 버튼 활성화X
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  }

  function onClickNextPage() {
    // 다음페이지
    if (startPage + 10 > lastPage) return; // 만약 처음페이지가 11이라면 21보다 많아야함
    setStartPage((prev) => prev + 10);
  }
  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <span onClick={onClickPrevPage}>이전 페이지</span>

      {new Array(10).fill(1).map(
        // 10개열의 배열을 만들어서 담아줌 10개의 페이지가 나오도록
        // ex) 1 2 3 4 5 6 7 8 9 10

        (_, index) =>
          startPage + index <= lastPage && (
            <span
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {startPage + index}
            </span>
          )
      )}

      <span onClick={onClickNextPage}>다음 페이지</span>

      {/* <span onClick={onClickPage} id="1">
        1
      </span>
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span>
      <span onClick={onClickPage} id="4">
        4
      </span>
      <span onClick={onClickPage} id="5">
        5
      </span>
      <span onClick={onClickPage} id="6">
        6
      </span>
      <span onClick={onClickPage} id="7">
        7
      </span>
      <span onClick={onClickPage} id="8">
        8
      </span>
      <span onClick={onClickPage} id="9">
        9
      </span>
      <span onClick={onClickPage} id="10">
        10
      </span> */}
    </>
  );
}
