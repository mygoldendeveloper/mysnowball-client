import * as S from "./AppLayout.style";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <S.App id="app">
      <S.Layout>{children}</S.Layout>
    </S.App>
  );
};

export default AppLayout;
