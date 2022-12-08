import Modal from "components/Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "stores";
import * as S from "./AppLayout.style";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const modalStatus = useRecoilValue(modalState);

  return (
    <S.App id="app">
      <Modal />
      <S.Layout>{children}</S.Layout>
    </S.App>
  );
};

export default AppLayout;
