import { useQuery } from "@apollo/client";
import ListUI from "./List.presenter";
import { FETCH_BOARDS } from "./List.queries";
import router, { useRouter } from "next/router";
import { IListUIProps } from "./List.types";

export default function List() {
  const { data } = useQuery(FETCH_BOARDS);

  function onClickWrite(){
    router.push(`/boards/new/`);

  }

  return<ListUI data={data} onClickWrite={onClickWrite} />
}