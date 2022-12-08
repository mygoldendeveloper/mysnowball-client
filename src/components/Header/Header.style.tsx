import styled from "@emotion/styled";

interface HeaderInterface {
  isFixed?: boolean;
  position?: "sticky" | "fixed";
  isVisible?: boolean;
  isTransparent?: boolean;
}

export const HeaderWrap = styled.header`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  position: ${({ position }: HeaderInterface) => position};
  top: 0;
  left: 0;

  transition: background 0.3s;
  z-index: 200;
  width: 100%;
  height: 54px;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  max-width: 600px;

  padding: 12px 18px 12px 12px;

  background: none;
  border-bottom: ${({ isVisible }: HeaderInterface) =>
    isVisible ? "1px solid #F5F5F5" : "none"};

  img {
    cursor: pointer;
  }
`;

export const Left = styled.div``;
export const Center = styled.div``;
export const Right = styled.div``;
