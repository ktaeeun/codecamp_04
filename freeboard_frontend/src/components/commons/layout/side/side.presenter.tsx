import CommonButton from "../../buttons/03/CommonButton";
import {
  Wrapper,
  TitleWrapper,
  Title,
  UserInfoWRapper,
  UserPhoto,
  UserName,
  UserPoint,
  MenuWrapper,
  MenuMarket,
  MenuPoint,
  MenuProfile,
} from "./side.styles";
import { Modal } from "antd";
import Point from "../../../users/point/point.container";

export default function SideBarUI(props: any) {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>MY PAGE</Title>
        </TitleWrapper>
        <UserInfoWRapper>
          <UserPhoto
            src={
              props.data?.fetchUserLoggedIn.picture
                ? `https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`
                : "/images/photo.png"
            }
          />
          <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
          <UserPoint>
            보유포인트 :{"  "}
            {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
              "ko-KR"
            )}
            냥
          </UserPoint>
          <CommonButton name="포인트 충전하기" onClick={props.onToglePoint} />
          {props.isPointOpen && (
            <Modal
              visible={true}
              onCancel={props.onToglePoint}
              cancelButtonProps={{ style: { display: "none" } }}
              okButtonProps={{ style: { display: "none" } }}
              mask={true}
            >
              <Point />
            </Modal>
          )}
        </UserInfoWRapper>
        <MenuWrapper>
          <MenuMarket
            onClick={props.onClcikMoveToMyMarket}
            market={props.market}
          >
            💖 찜목록
          </MenuMarket>
          <MenuPoint onClick={props.onClickMoveToMyPoint} point={props.point}>
            💸 내 포인트
          </MenuPoint>
          <MenuProfile
            onClick={props.onClickMoveToMyProfile}
            profile={props.profile}
          >
            📷 내 프로필
          </MenuProfile>
        </MenuWrapper>
      </Wrapper>
    </>
  );
}
