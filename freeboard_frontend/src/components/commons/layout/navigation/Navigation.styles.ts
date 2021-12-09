import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-family: myfont;
  margin-top: 50px;
  height: 64px;
  background-color: #ffa07a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
  font-family: myfont;
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: #ff4500;
  }
`;
