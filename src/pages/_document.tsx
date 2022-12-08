import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="ko">
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
      />
      <script async src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
