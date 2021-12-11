import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const BestBoardTitle = styled.div`
  font-family: myfont;
  font-style: "normal";
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 6px 6px #ffe87f;
`;

export const BestBoardContents = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
`;
export const BestBoardBox = styled.div`
  width: 282px;
  height: 257px;

  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  /* background-image: url("/images/bestboard1.png"); */
  cursor: pointer;
  :hover {
    background-color: #81d8b1;
  }
`;
export const BestPhoto1 = styled.img`
  width: 282px;
  height: 45%;
`;

export const BestText = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
`;

export const BestTitle = styled.div`
  font-family: myfont;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  /* Black */

  color: #000000;
`;
export const BestContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const BestProfile = styled.div``;
export const BestName = styled.div`
  display: flex;
`;
export const profilePhoto = styled.div`
  size: 20px;
`;
export const ProfileName = styled.div`
  font-family: myfont;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Black */

  color: #000000;

  margin-left: 6px;
`;
export const BestDate = styled.div`
  font-family: myfont;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  /* Gray 3 */

  color: #828282;
`;

export const BestLike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LikePhoto = styled.div``;
export const LikeCount = styled.div`
  font-family: myfont;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Black */

  color: #000000;
`;
export const TextToken = styled.span`
  color: ${(props: any) => (props.isMatched ? "red" : "black")};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  font-family: myfont;
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const TitleWrapper = styled.div`
  font-family: myfont;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfilePhoto = styled.div``;
