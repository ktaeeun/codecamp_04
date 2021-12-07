// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// 동적으로 브라우저에서만 임포트함
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  function handleChange(value: string) {
    console.log(value);
  }
  //   if (process.browser) {
  //     console.log("나는 브라우저다");
  //   } else {
  //     console.log("나는 프론트엔드서버");
  //   }

  return (
    <>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </>
  );
}
