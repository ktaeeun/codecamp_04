import { useRouter } from "next/router";
import LayoutNavigationUI from "./Navigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  function onClickMenu(event: any) {
    router.push(event.target.id);
  }

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
