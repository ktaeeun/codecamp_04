import Head from "next/head";
export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트 게시판" />
        <meta property="og:url" content="http://withnyang.shop" />
        <meta
          property="og:img"
          content="https://i.ytimg.com/vi/vf8t8LgZj74/maxresdefault.jpg"
        />
        <meta property="og:description" content="삼색이 보고가세요" />
      </Head>
      <div>안녕하세요 게시판입니다</div>
    </>
  );
}
