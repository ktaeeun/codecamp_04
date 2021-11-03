import { useState } from "react"

export default function login() {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
        if(email.includes("@" === false)) {
            setEmailError("이메일 주소를 다시 확인해주세요.")
        } 
    };  

    const onChangePassword = (event) => {
        setPassword(event.target.value);
        if(password.length >= 8 && password.length <=16) {
            setPasswordError("8~16자의 영문,숫자,특수 문자만 사용가능합니다.")
        }
    };

    const onClickLogin = () => {
        if(emailError === "" && passwordError === "") {
            alert("로그인 되었습니다.")
        }
    };

    return(
        <Container>
            <Wrapper>
                <ItsWrapper>
                    <ItsImg src="/imgages/its.png"></ItsImg>
                    <ItsTitle>잇츠로드</ItsTitle>
                </ItsWrapper>

            <InputWrapper>
                <EmailInputWrapper>
                    <EmailInput placeholder="이메일을 입력해주세요">
                        onChange={onChangeEmail}
                    </EmailInput>
                </EmailInputWrapper>
                <EmailError>{EmailError}</EmailError>

                <PasswordInputWrapper>
                    <PasswordInput placeholder="비밀번호를 입력해주세요">
                        onChange={onChangePassword}
                    </PasswordInput>
                </PasswordInputWrapper>
                <PasswordError>{PasswordError}</PasswordError>
            </InputWrapper>
            
            <LoginButton onClick={onClickLogin}>
                <LoginButtonTitle>로그인</LoginButtonTitle>
            </LoginButton>

            <PersonalButton>
                <PersonalItem>이메일 찾기</PersonalItem>
                <PersonalItem>|</PersonalItem>
                <PersonalItem>비밀번호찾기</PersonalItem>
                <PersonalItem>|</PersonalItem>
                <PersonalItem>회원가입</PersonalItem>
                <PersonalItem>|</PersonalItem>
            </PersonalButton>

            <KakaoLoginButton>
                <KakaoLoginButtonImg src="/images/img-60-profile-image.png"></KakaoLoginButtonImg>
                <KakaoLoginButtonTitle>카카오톡으로 로그인</KakaoLoginButtonTitle>
            </KakaoLoginButton>

            </Wrapper>

        </Container>
    );

}