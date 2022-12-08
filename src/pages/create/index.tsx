import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { SnowballBig, Text } from "components";
import { Button } from "components/Button";
import Input from "components/Input";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { kakaoInit } from "service";
import { postSnowball } from "service/api";
import { authState, redirectUrlState, userState } from "stores";

import * as S from "styles/create";

interface PostSnowRes {
  id: number;
  nickName: string;
  phoneNumber: string;
  accessToken: string;
  refreshToken: string;
}

const SnowBallCreate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const auth = useRecoilValue(authState);
  const user = useRecoilValue(userState);
  const setRedirect = useSetRecoilState(redirectUrlState);

  const [inputs, setInputs] = useState({
    nickname: "",
    phone: "",
  });

  const { nickname, phone } = inputs; // 구조분해를 통해서 객체 값 추출

  const onChange = (e: any) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, //  spread를 사용하여 기존 객체 복사
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const PostPostMutation = useMutation(
    (data: PostSnowRes) => postSnowball(data),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(["POST_SNOWBALL_CARD"]);
        router.push(`/snowball/${res.id}`);
      },
      onError: () => {},
    }
  );

  const handlePrimaryButtonClick = () => {
    PostPostMutation.mutate({
      id: 999,
      nickName: nickname || user.nickname || "",
      phoneNumber: phone,
      accessToken: auth.accessToken || "access",
      refreshToken: auth.refreshToken || "refresh",
    });
  };

  useEffect(() => {
    if (!auth.accessToken) {
      setRedirect("/create");
      router.push("login");
    }
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="descriptio0n" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Layout>
        <S.SnowballLayout>
          <Text type="24-600">{`친구들이 스노볼을 \n 하나하나 채워줄 거예요.`}</Text>
          <S.InputBox>
            <Input
              label="스노우볼의 이름을 지어주세요"
              name="nickname"
              value={nickname}
              onChange={onChange}
            />
            <Input
              label="알림을 받을 연락처를 입력해주세요"
              name="phone"
              value={phone}
              onChange={onChange}
            />
          </S.InputBox>

          <SnowballBig open={0} />
        </S.SnowballLayout>
        <S.Footer>
          <Button onClick={handlePrimaryButtonClick}>스노우볼 만들기</Button>
        </S.Footer>
      </S.Layout>
    </>
  );
};

export default SnowBallCreate;