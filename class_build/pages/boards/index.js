import Head from "next/head";
export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트 게시판" />
        <meta property="og:url" content="http://withnyang.shop" />
        <meta
          property="og:image"
          content="http://file3.instiz.net/data/file3/2020/08/20/8/c/9/8c91f9a4ad28513f4a50a41bb54d66bb.jpg"
        />
        <meta property="og:description" content="삼색이 보고가세요" />
      </Head>
      <div>안녕하세요 게시판입니다</div>
    </>
  );
}
