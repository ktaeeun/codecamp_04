import styled from "@emotion/styled";
import { ReactChild } from "react";
import Header from "./header/Header.Contatiner";
import Banner from "./banner/Banner.Contatiner";
import Navigation from "./navigation/Navigation.Contatiner";
import Footer from "./footer/Footer.Contatiner";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
`;
const SideBar = styled.div`
  width: 200px;
  height: 700px;
  background-color: navy;
`;

const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev"];

interface ILayoutProps {
  children: ReactChild;
}
export default function Layout(Props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <SideBar>여기는 사이드바입니다</SideBar>
        <Body>{Props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
