import styled from "@emotion/styled";

export const Layout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 90vh;

  padding: 20px;
`;

export const SnowballLayout = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 40px;

  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  aspect-ratio: 11 / 2;

  max-width: 600px;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > svg {
    width: 100px;
  }
`;

export const SnowBall = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-height: 600px;

  align-self: center;

  margin: 60px 0 0 0;

  border-radius: 50%;
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
