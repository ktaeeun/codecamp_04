import { useRouter } from "next/router";

export function useMoveToPage(){
    const router = useRouter();

  function moveToPage = (page) => () => {
    router.push(page);
  }

  return {
      moveToPage: moveToPage
  }
}