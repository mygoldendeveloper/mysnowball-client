import styled from "@emotion/styled";
import { Text } from "components";
import Lottie from "components/Lottie";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  padding: 80px 20px 40px;
`;

export const WaitingLottie = styled(Lottie)`
  width: 350px;
  height: 240px;
`;

export const Title = styled(Text)`
  align-self: start;
`;
