import { MenuItem, Wrapper } from "./Navigation.styles";
import { ILayoutNavigationUIProps } from "./Navigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/openapis" onClick={props.onClickMenu}>
        랜덤 사진전📺
      </MenuItem>
      <>|</>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        주인님 자랑🐺
      </MenuItem>
      <>|</>
      <MenuItem id="/market/market-list" onClick={props.onClickMenu}>
        나눔마켓📢
      </MenuItem>
      <>|</>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        가족이 되어주세요❤
      </MenuItem>
      <>|</>
      <MenuItem id="/mypage" onClick={props.onClickMenu}>
        마이페이지🔒
      </MenuItem>
    </Wrapper>
  );
}
