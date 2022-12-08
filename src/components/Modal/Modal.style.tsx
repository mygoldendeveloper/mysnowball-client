import styled from "@emotion/styled";
import { Color } from "foundations";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
`;

interface Props {
  isTransparent?: boolean;
}

export const Layout = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: fixed;

  top: 80px;
  bottom: 80px;
  left: 20;
  right: 20;
  z-index: 1000;
  margin: auto auto;
  padding: 32px 20px;
  background: ${Color["gray200"]};
  border-radius: 12px;
  animation: modal-show 0.4s;
  overflow-x: hidden;
  overflow-y: auto;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    height: 60vh;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes modal-hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;
