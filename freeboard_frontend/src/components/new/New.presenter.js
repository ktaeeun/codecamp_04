import {
    Wrapper,
    Title,
    WriterWrapper,
    TextWrapper,
    Label,
    Writer,
    Password,
    Subject,
    Contents,
    AddressWrapper,
    AddressNumber,
    SearchButton,
    Address,
    Youtube,
    PhotoWrapper,
    UploadButton,
    OptionWrapper,
    OptionRadio,
    RadioLabel,
    ButtonWrapper,
    CancelButton,
    SubmitButton,
    Error,
  } from "./New.styles";
  
  export default function NewWriteUI(props) {
    return (
      <Wrapper>
         <Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Title>
        <WriterWrapper>
          <TextWrapper>
            <Label>작성자</Label>
            <Writer
              name="writer"
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
            />
            <Error>{props.writerError}</Error>
          </TextWrapper>
          <TextWrapper>
            <Label>비밀번호</Label>
            <Password
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <Error>{props.passwordError}</Error>
          </TextWrapper>
        </WriterWrapper>
        <TextWrapper>
          <Label>제목</Label>
          <Subject
            name="subject"
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
          />
          <Error>{props.titleError}</Error>
        </TextWrapper>
        <TextWrapper>
          <Label>내용</Label>
          <Contents
            name="contents"
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
          />
          <Error>{props.contentsError}</Error>
        </TextWrapper>
        <TextWrapper>
          <Label>주소</Label>
          <AddressWrapper>
            <AddressNumber name="addressnumber" placeholder="07250" />
            <SearchButton>우편번호 검색</SearchButton>
          </AddressWrapper>
          <Address />
          <Address />
        </TextWrapper>
        <TextWrapper>
          <Label>유튜브</Label>
          <Youtube name="youtube" placeholder="링크를 복사해주세요." />
        </TextWrapper>
        <PhotoWrapper>
          <Label>사진첨부</Label>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
        </PhotoWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <OptionRadio name="optionradio" type="radio" />
          <RadioLabel>유튜브</RadioLabel>
          <OptionRadio name="optionradio" type="radio" />
          <RadioLabel>사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <CancelButton>취소하기</CancelButton>
          {!props.isEdit && (<SubmitButton color={props.color} onClick={props.onClickCorrect} disabled={!props.color}>
            등록하기
          </SubmitButton>
        )}

        {props.isEdit && (<SubmitButton color={props.color} onClick={props.onClickEdit} disabled={!props.color}>
            수정하기
          </SubmitButton>
        )}
          
        </ButtonWrapper>
      </Wrapper>
    );
  }