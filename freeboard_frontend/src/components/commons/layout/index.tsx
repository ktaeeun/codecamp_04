import styled from "@emotion/styled";
import { ReactChild } from "react";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.contatiner";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div`
  margin-left: 160px;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

const HIDDEN_HEADERS = ["/boards/new"];

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
        <Body>{Props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
