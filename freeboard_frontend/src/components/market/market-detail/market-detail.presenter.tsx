import CommonButton from "../../../components/commons/buttons/03/CommonButton";
import RedButton from "../../../components/commons/buttons/02/RedButton";
import Dompurify from "dompurify";

import {
  Wrapper,
  WrapperHeader,
  UserWrapper,
  IconWrapper,
  UserInfo,
  UserPhoto,
  InfoWrapper,
  Seller,
  Date,
  LinkIcon,
  MapIcon,
  WrapperBody,
  TitleWrapper,
  Title,
  SubTitle,
  MainTitle,
  LikeWrapper,
  Heart,
  LikeCount,
  PriceWrapper,
  PhotoWrapper,
  ProductPhoto,
  Contents,
  ContentsWrapper,
  TagWrapper,
  Tag,
  Line,
  MapWrapper,
  Map,
  ButtonWrapper,
} from "./market-detail.styles";
import { Tooltip } from "antd";

export default function MarketDetailUI(props: any) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <UserWrapper>
            <UserInfo>
              <UserPhoto
                src={
                  props.data?.fetchUseditem.seller.picture
                    ? `https://storage.googleapis.com/${props.data?.fetchUseditem.seller.picture}`
                    : "/images/photo.png"
                }
              />
              <InfoWrapper>
                <Seller>{props.data?.fetchUseditem.seller?.name}</Seller>
                <Date>
                  Date :{props.data?.fetchUseditem.createdAt.slice(0, 10) + " "}
                  {props.data?.fetchUseditem.createdAt.slice(11, 19)}
                </Date>
              </InfoWrapper>
            </UserInfo>
          </UserWrapper>
          <IconWrapper>
            <LinkIcon src="/images/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
            >
              <MapIcon src="/images/map2.png" />
            </Tooltip>
          </IconWrapper>
        </WrapperHeader>
        <Line />
        <WrapperBody>
          <TitleWrapper>
            <Title>
              <SubTitle>{props.data?.fetchUseditem.remarks}</SubTitle>
              <MainTitle>{props.data?.fetchUseditem.name}</MainTitle>
            </Title>
            <LikeWrapper>
              <Heart
                src="/images/heart.png"
                id={props.data?.fetchUseditem._id}
                onClick={props.onClickToggleUseditemPick}
              />
              <LikeCount>{props.data?.fetchUseditem.pickedCount}</LikeCount>
            </LikeWrapper>
          </TitleWrapper>
          <PriceWrapper>
            {props.data?.fetchUseditem.price.toLocaleString("ko-KR")} 원
          </PriceWrapper>
          <PhotoWrapper>
            {props.data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <ProductPhoto
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </PhotoWrapper>
          <ContentsWrapper>
            {process.browser && (
              <Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              />
            )}
          </ContentsWrapper>
          <TagWrapper>
            <Tag>{props.data?.fetchUseditem.tags}</Tag>
          </TagWrapper>
          <Line />
          <MapWrapper>
            <Map id="map"></Map>
          </MapWrapper>
        </WrapperBody>
      </Wrapper>
      <ButtonWrapper>
        <CommonButton onClick={props.onClickMoveToMarketList} name="목록으로" />
        <CommonButton onClick={props.onClickBuy} name="구매하기" />
        <CommonButton onClick={props.onClickMoveToEdit} name="수정하기" />
        <RedButton
          id={props.data?.fetchUseditem._id}
          onClick={props.onClickDeleteProduct}
          name="삭제하기"
        />
      </ButtonWrapper>
    </>
  );
}
