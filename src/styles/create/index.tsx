import styled from "@emotion/styled";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  height: 90vh;
  padding: 80px 20px 40px;
`;

export const SnowballLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  > span {
    align-self: start;

    white-space: pre-wrap;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  margin: 20px;
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
