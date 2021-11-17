import { MenuItem, Wrapper } from "./Navigation.styles";
import { ILayoutNavigationUIProps } from "./Navigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/openapis" onClick={props.onClickMenu}>
        주인님 라이브
      </MenuItem>
      <>|</>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        주인님 자랑
      </MenuItem>
      <>|</>
      <MenuItem id="/markets" onClick={props.onClickMenu}>
        주인님 핫템
      </MenuItem>
      <>|</>
      <MenuItem id="/mypages" onClick={props.onClickMenu}>
        마이페이지
      </MenuItem>
    </Wrapper>
  );
}
