import { SnowballBig } from "components";
import { Button } from "components/Button";
import Header from "components/Header";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import * as S from "styles/snowball";

const SnowBallPage = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const handlePrimaryButtonClick = () => {
    router.push(`/card/${id}`);
  };
  const handleCreateButtonClick = () => {
    router.push(`/create/${id}`);
  };
  const handleShareButtonClick = () => {};

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="descriptio0n" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <S.Layout>
        <S.SnowballLayout>
          <SnowballBig open={4} />
        </S.SnowballLayout>
      </S.Layout>
      <S.Footer>
        <Button onClick={handlePrimaryButtonClick}>
          친구 스노우볼 꾸며주기
        </Button>
        <S.Secondary>
          <Button color="green200" onClick={handleCreateButtonClick}>
            내 스노우볼 만들기
          </Button>
          <Button color="green200" onClick={handleShareButtonClick}>
            공유하기
          </Button>
        </S.Secondary>
      </S.Footer>
    </>
  );
};
export default SnowBallPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps = async (context) => {
  // const queryClient = new QueryClient();
  const id = context.params?.id as string;

  return {
    props: {
      id,
      // dehydratedState: dehydrate(queryClient),
    },
  };
};
