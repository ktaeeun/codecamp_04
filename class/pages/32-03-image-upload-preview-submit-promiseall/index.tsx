import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
      title
      contents
      images
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState();
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
      setMyFile(file);
    };
  }

  async function onClickSubmit() {
    let myImageUrls = ["", "", ""];
    // 1. 파일업로드
    // if (myFile.length) {
    //   const result1 = await uploadFile({
    //     variables: {
    //       file: myFile,
    //     },
    //   });
    //   myImageUrl = result1.data?.uploadFile.url || "";
    // }

    // // // 2. 업로드된 파일로 게시물등록

    // const result2 = await createBoard({
    //   variables: {
    //     createBoardInput: {
    //       writer: "영희",
    //       password: "1234",
    //       title: "안녕하세요",
    //       contents: "이미지 업로드 테스트",
    //       images: [myImageUrl],
    //     },
    //   },
    // });
    // console.log(result2.data?.createBoard._id);

    // 2. 동시 올리기 테스트
    const start = performance.now();
    const result = await Promise.all([
      // vs Promise.race([ ... ])
      uploadFile({ variables: { file: myFile[0] } }),
      uploadFile({ variables: { file: myFile[0] } }),
      uploadFile({ variables: { file: myFile[0] } }),
      uploadFile({ variables: { file: myFile[0] } }),
      uploadFile({ variables: { file: myFile[0] } }),
      // uploadFile({ variables: { file: myFile[0] } }),
      // uploadFile({ variables: { file: myFile[0] } }),
      // uploadFile({ variables: { file: myFile[0] } }),
      // uploadFile({ variables: { file: myFile[0] } }),
      // uploadFile({ variables: { file: myFile[0] } }),
    ]);
    const end = performance.now();
    console.log(end - start);
  }
  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
