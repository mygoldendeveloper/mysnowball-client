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
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
