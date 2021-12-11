import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-family: myfont;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  font-family: myfont;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Gaegu-bold.ttf";
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-family: myfont;
  font-size: 18px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  font-family: myfont;
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;
