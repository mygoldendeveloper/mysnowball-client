import styled from "@emotion/styled";
import { Text } from "components";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 90vh;
  padding: 80px 20px 40px;
`;

export const Title = styled(Text)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;

  animation: animatedImage 0.8s linear infinite;

  @keyframes animatedImage {
    0% {
      top: 300px;
    }
    50% {
      top: 320px;
    }
    100% {
      top: 300px;
    }
  }
`;

export const TextBox = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 90vh;
  margin: 80px 0 0 0;
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

export const Secondary = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  gap: 12px;
`;
