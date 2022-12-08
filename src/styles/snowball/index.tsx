import styled from "@emotion/styled";
import { Text } from "components";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  padding: 40px 20px 40px;
`;

export const Title = styled(Text)`
  margin: 20px 0 0;
`;

export const SnowballLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;

  width: 100%;
  margin: 100px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 600px;

  position: fixed;
  padding: 0 20px;
  bottom: 40px;
`;

export const Secondary = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  gap: 12px;
`;
