import { InnerButton, InnerLogo, InnerWrapper, Wrapper } from "./Header.styles";

interface IProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
}
export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>여기가 천국이냥</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
