import { useRouter } from "next/router";
import { useState } from "react";

type Ipage = "/boards" | "/markets" | "/mypage"
export function useMoveToPage(){
    const [visitedPage, setVisitedPage] = useState("/") 
    const router = useRouter();

  function moveToPage = (page: Ipage) => () => {
    setVisitedPage(page)
    router.push(page);
  }

  return {
    moveToPage,
    visitedPage
    
  }
}