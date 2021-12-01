import BigCommonButton from "../../../components/commons/buttons/01/BigCommonButton";

import {
  Wrapper,
  PhotoWrapper,
  PhotoLine,
  Photo,
  SignUpWrapper,
  TitleWrapper,
  Title,
  SubTitle,
  Logo,
  TextWrapper,
  Info,
  Error,
} from "./signup.styles";

export default function SignUpUI(props: any) {
  return (
    <>
      <Wrapper>
        <PhotoWrapper>
          <Photo src="/images/layoutImage/signup.png" />
        </PhotoWrapper>
        <SignUpWrapper>
          <TitleWrapper>
            <Title>회원가입</Title>
            <SubTitle>
              <Logo>여기가 천국이냥 </Logo> 에 오신걸 환영합니다!
            </SubTitle>
          </TitleWrapper>
          <TextWrapper>
            <Info
              type="text"
              placeholder="이메일"
              onChange={props.onChangeEmail}
            />
            <Error>{props.emailError}</Error>

            <Info
              type="text"
              placeholder="이름"
              onChange={props.onChangeName}
            />
            <Error>{props.nameError}</Error>
            <Info
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
            <Error>{props.passwordError}</Error>

            <Info
              type="password"
              placeholder="비밀번호확인"
              onChange={props.onChangeCheckPassword}
            />
            <Error>{props.checkPasswordError}</Error>

            <BigCommonButton
              name="회원가입하기"
              onClick={props.onClickRegister}
            />
          </TextWrapper>
        </SignUpWrapper>
      </Wrapper>
    </>
  );
}
