import styled from "@emotion/styled";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  padding: 80px 20px 40px;
`;

export const CardInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const TextareaWrap = styled.div`
  display: flex;
  flex: 1;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: calc(100vh - 280px);
  resize: none;
  overflow-y: auto;
  padding: 12px 12px;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 14px;
  text-align: left;
  line-height: 1.43;
  letter-spacing: -0.6px;
  color: #000000;

  &::placeholder {
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: -0.6px;
    text-align: left;
    color: #979797;
  }

  &:disabled {
    opacity: 1;
    -webkit-text-fill-color: inherit;
  }

  &:focus {
    outline: none;
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

export const Secondary = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  gap: 12px;
`;
