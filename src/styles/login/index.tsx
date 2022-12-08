import styled from "@emotion/styled";
import { Text } from "components";
import Lottie from "components/Lottie";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;

  justify-content: center;

  height: 100vh;
`;

export const WaitingLottie = styled(Lottie)`
  width: 350px;
  height: 240px;
  align-self: center;
`;

export const Title = styled(Text)`
  position: fixed;
  padding: 0 20px;
  top: 40px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: fixed;
  padding: 0 20px;
  bottom: 40px;

  width: 100%;
  max-width: 600px;
`;
