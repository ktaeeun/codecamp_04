import styled from "emotion/styled";
import {useState} from "react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
    
    `;

const Wrapper = styled.div`
    width: 640px;
    padding: 0 0 83px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("\img-bg_2021-11-02");
    background-color: rgba(0, 0, 0, 0.55);
    background-blend-mode: multiply;
    `;

const ItsWrapper = styled.div`        
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 220px;
    padding-bottom: 160px;
`;

const ItsImg = styled.div`
    width: 100px;
    height: 100px;

`;

const ItsTitle = styled.div`
    font-size: 60px;
    font-weight: bold;
    color: white;
    padding-top: 30px;
`;

const InputWrapper = styled.div`
    width: 540px;
`;

const EmailInputWrapper = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin-bottom: 10px;
`;
const EmailInput = styled.input`
  width: 80%;
  font-size: 24px;
  color: #fff;
  border: none;
  background: none;
  outline: none;
`;
const PasswordInputWrapper = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin-bottom: 10px;
`;
const PasswordInput = styled.input`
  width: 80%;
  margin-top: 40px;
  font-size: 24px;
  color: #fff;
  border: none;
  background: none;
  outline: none;
`;
const EmailError = styled.div`
  padding-top: 10px;
  font-size: 18px;
  color: #ff1b6d;
`;
const PasswordError = styled.div`
  padding-top: 10px;
  font-size: 18px;
  color: #ff1b6d;
`;
const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 76px;
  border-radius: 38px;
  padding: 25px 0;
  background-color: rgba(255, 27, 109, 0.6);
  margin: 20px 0 45px 0;
  cursor: pointer;
`;
const LoginButtonTitle = styled.div`
  opacity: 1;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;
const PersonalButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const PersonalItem = styled.div`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
`;
const KakaoLoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 76px;
  border-radius: 38px;
  padding: 25px 0;
  color: #fae100;
  border: 2px solid #fae100;
  margin: 60px 0 80px 0;
  cursor: pointer;
`;
const KakaoLoginButtonImg = styled.img`
  width: 32px;
  height: 30px;
  margin-right: 20px;
`;
const KakaoLoginButtonTitle = styled.div`
  opacity: 1;
  font-size: 26px;
  font-weight: bold;
`;