import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

// 동적으로 브라우저에서만 임포트함
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

interface FormValues {
  writer: string;
  password: string;
  title: string;
  contents: string;
}
export default function WebEditorReactHookFormSubmitPage() {
  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  function handleChange(value: string) {
    console.log(value);

    // register로 등록하지않고 강제로 값을 넣어줌
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 되는지 안되는지 react-hook-form에서 알려줌
    trigger("contents");
  }

  //   if (process.browser) {
  //     console.log("나는 브라우저다");
  //   } else {
  //     console.log("나는 프론트엔드서버");
  //   }

  async function onClickSubmit(data: FormValues) {
    // createBoard 뮤테이션 요청

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: {process.browser && <ReactQuill onChange={handleChange} />}
      <br />
      <button>등록하기</button>
    </form>
  );
}
