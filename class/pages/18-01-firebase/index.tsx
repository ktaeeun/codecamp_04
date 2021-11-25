import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

import { firebaseApp } from "../_app";

export default function FirebasePage() {
  async function onClickSubmit() {
    // 등록하기

    // const board = collection(getFirestore(firebaseApp), "board");

    // await addDoc(board, {
    //   writer: "철수",
    //   title: "제목입니다",
    //   contents: "내용입니다",
    // });

    const product = collection(getFirestore(firebaseApp), "product");

    await addDoc(product, {
      seller: "짱구",
      name: "초코비",
      contents: "맛있음",
    });
  }

  async function onClickFetch() {
    // 불러오기

    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  }

  return (
    <>
      <div>파이어베이스 연습 페이지입니다</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
