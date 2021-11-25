// import BigCommonButton from "../../../commons/buttons/03/BigCommonButton";
import {
  Wrapper,
  LogoWrapper,
  Logo,
  Title,
  TextWrapper,
  Line,
  Info,
  StayWraaper,
  StayLogin,
  StayLoginText,
  MenuWrapper,
  Menu,
  MenuLine,
} from "./login.syles";

export default function LoginUI(props: any) {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>여천냥</Logo>
        </LogoWrapper>
        <Title>로그인하기</Title>
        <TextWrapper>
          <Info
            type="text"
            placeholder="이메일"
            onChange={props.onChangeEmail}
          />
          <Info
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <StayWraaper>
            <StayLogin type="checkbox" />
            <StayLoginText>로그인 상태 유지하기</StayLoginText>
          </StayWraaper>
          <button name="로그인하기" onClick={props.onClickLogin}></button>
        </TextWrapper>
        <Line />
        <MenuWrapper>
          <Menu>이메일 찾기</Menu>
          <MenuLine>|</MenuLine>
          <Menu> 비밀번호 찾기</Menu>
          <MenuLine>|</MenuLine>
          <Menu>회원가입</Menu>
        </MenuWrapper>
      </Wrapper>
    </>
  );
}
