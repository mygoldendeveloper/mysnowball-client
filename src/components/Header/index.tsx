import * as S from "./Header.style";

export interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
  center?: React.ReactNode;
  isFixed?: boolean;
  position?: "sticky" | "fixed";
  isTransparent?: boolean;
}

const Header = ({
  left = <></>,
  right = <></>,
  center = <></>,
  isFixed = false,
  position = "fixed",
  isTransparent = false,
}: Props) => {
  return (
    <S.HeaderWrap position={position} id="header">
      <S.Contents isFixed={isFixed} isTransparent={isTransparent}>
        <S.Left>{left}</S.Left>
        <S.Center>{center}</S.Center>
        <S.Right>{right}</S.Right>
      </S.Contents>
    </S.HeaderWrap>
  );
};

export default Header;
