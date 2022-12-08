import { Text } from "components";
import { useGetSnowball } from "hooks/queries";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as S from "styles/loading";

const SnowBallCreateLoading = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { data, isError, isLoading } = useGetSnowball(id);

  const LoadingImage = () => {
    if (isLoading || isError) {
      return <></>;
    }
    const getImageUrl = () => {
      var url: string;
      switch (data.length) {
        case 1:
          url = "/images/big.png";
          break;
        case 2:
          url = "/images/small.png";
          return;
        case 3:
          url = "/images/snowman.png";
          return;
        case 4:
          url = "/images/present.png";
          return;

        default:
          url = "/images/present.png";
          return;
      }
      return url;
    };
    const url = getImageUrl();

    return (
      <Image
        src={url || "/images/present.png"}
        alt="로딩이미지"
        width={212}
        height={212}
      />
    );
  };

  useEffect(() => {
    setTimeout(() => {
      router.push(`/snowball/${id}`);
    }, 300000);
  });

  return (
    <>
      <Head>
        <title>My Snowball</title>
        <meta
          name="친구의 스노우볼을 채워주세요. "
          content="Generated by My Snowball"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Layout>
        {data && data.length && (
          <S.Title type="20-600">{`메세지는 12월 ${
            25 - (data.length > 13 ? 13 : data.length)
          }일에 도착합니다.`}</S.Title>
        )}

        <S.LoadingBox>
          <LoadingImage />
        </S.LoadingBox>
        <S.TextBox>
          <Text type="20-600">스노우볼 선물이 친구에게 가고있어요!</Text>
        </S.TextBox>
      </S.Layout>
    </>
  );
};

export default SnowBallCreateLoading;

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
