import styled from "@emotion/styled";
import { Text } from "components";
import Lottie from "components/Lottie";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 20px;

  align-items: center;

  margin: 80px 20px 40px;
  height: 90vh;
`;

export const WaitingLottie = styled(Lottie)`
  width: 500px;
  height: 320px;
`;

export const Title = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  aspect-ratio: 4 / 1;

  max-width: 600px;

  > svg {
    width: 100px;
  }
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
