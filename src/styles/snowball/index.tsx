import styled from "@emotion/styled";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  padding: 80px 20px 40px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;

  max-width: 600px;
`;

export const Secondary = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  gap: 12px;
`;
