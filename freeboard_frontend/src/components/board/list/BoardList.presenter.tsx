import { getDate } from "../../../commons/libraries/utils";
import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  PencilIcon,
  Button,
  BestBoardContents,
  BestBoardBox,
  BestPhoto1,
  BestText,
  BestTitle,
  BestContents,
  BestProfile,
  BestDate,
  BestLike,
  BestName,
  ProfilePhoto,
  ProfileName,
  LikeCount,
  LikePhoto,
  TitleWrapper,
  BestBoardTitle,
  TextToken,
} from "./BoardList.styles";
import Paginations01 from "../../commons/pagination/01/Pagination.container";
import { IBoardListUIProps } from "./BoardList.types";
import Searchbars01 from "../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Wrapper>
      <TableTop />
      <TitleWrapper>
        <BestBoardTitle>주인님을 자랑해주세요!</BestBoardTitle>
      </TitleWrapper>

      <BestBoardContents>
        {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el) => (
          <BestBoardBox key={el._id} id={el._id} onClick={props.onClickBest}>
            <BestPhoto1
              src={
                el.images[0]
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : "/images/noimage.jpg"
              }
            />

            <BestText>
              <BestTitle>{el.title}</BestTitle>
              <BestContents>
                <BestProfile>
                  <BestName>
                    <ProfilePhoto>
                      <img src="/images/ddabong.png" />
                    </ProfilePhoto>
                    <ProfileName>{el.writer}</ProfileName>
                  </BestName>
                  <BestDate>{el.createdAt.slice(0, 10)}</BestDate>
                </BestProfile>
                <BestLike>
                  <LikePhoto>
                    <img src="/images/bestlike.png" />
                  </LikePhoto>
                  <LikeCount>{el.likeCount}</LikeCount>
                </BestLike>
              </BestContents>
            </BestText>
          </BestBoardBox>
        ))}
      </BestBoardContents>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </TextToken>
              ))}
          </ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <Footer>
        <Paginations01
          refetch={props.refetch}
          count={props.count}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
        <Button onClick={props.onClickMoveToBoardNew}>
          <PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </Button>
      </Footer>
      <Searchbars01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
    </Wrapper>
  );
}
