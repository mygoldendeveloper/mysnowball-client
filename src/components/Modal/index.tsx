import React, { useEffect } from "react";

import { useRouter } from "next/router";

import { useRecoilValue, useResetRecoilState } from "recoil";

import { modalState } from "stores";

import * as S from "./Modal.style";
import { Text } from "components/Text";

const Modal = () => {
  const router = useRouter();
  const modalStatus = useRecoilValue(modalState);
  const resetModal = useResetRecoilState(modalState);

  const handleOverlayClick = () => {
    resetModal();
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", resetModal);
    return () => {
      router.events.off("routeChangeComplete", resetModal);
    };
  }, [resetModal, router]);

  return (
    <>
      {modalStatus.status && (
        <>
          <S.Overlay onClick={handleOverlayClick} />
          <S.Layout>
            {modalStatus.content && (
              <S.Text>
                <Text type="20-600">
                  {modalStatus.content.snowBall.nickName}님이 메세지를 남겼어요.
                </Text>
                {modalStatus.content.content}
              </S.Text>
            )}
          </S.Layout>
        </>
      )}
    </>
  );
};

export default Modal;
