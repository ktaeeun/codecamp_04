import {MyDiv, MyInput} from '../../styles/emotion'
export default function EmotionPage() {
    // 자바스크립트 쓰는 곳

        return( // html 쓰는 곳(JSX)
        
        //Fregmant 
        <> 
            <h1>로그인</h1>
            <MyDiv>아이디</MyDiv>
            <MyInput type="text"/> <br/>
            <MyDiv>비밀번호</MyDiv>
            <MyInput type="text"/><br/>
            나의 이미지: <img src="/images/lotto.png"/>
            </>
        )


}