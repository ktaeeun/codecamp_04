import Head from "next/head";
export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트 게시판" />
        <meta property="og:url" content="http://withnyang.shop" />
        <meta
          property="og:image"
          content="https://cdn.crowdpic.net/list-thumb/thumb_l_F849A239E3EC8D949EB01552E25497E0.jpg"
        />
        <meta property="og:description" content="삼색이 보고가세요" />
      </Head>
      <div>안녕하세요 게시판입니다</div>
    </>
  );
}
