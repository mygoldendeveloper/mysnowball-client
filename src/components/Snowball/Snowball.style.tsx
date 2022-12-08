import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-height: 600px;

  align-self: center;

  margin: 60px 0 0 0;

  > svg {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`;

export const Snowfall = styled.div`
  position: absolute;
  width: calc(100% - 160px);
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  .snowfall {
    position: absolute;
    top: 300px;
    left: 120px;
    z-index: 12;
    border-radius: 50%;
  }

  .snowflake,
  .snowflake1,
  .snowflake2 {
    position: absolute;
    border-radius: 50%;
    background-color: white;
    width: 7px;
    height: 7px;
    filter: blur(1px);
    left: 50px;
    box-shadow: 40px 40px white, -40px -40px white, 80px 60px white,
      100px -70px white, 110px -20px white, 20px -20px white, 120px 40px white,
      150px 10px white, 180px 20px white, 50px -60px white, 100px 20px white,
      150px -80px white, 170px -50px white, 185px -70px white, 190px 40px white,
      220px -10px white, 230px -60px white, 240px -30px white, 250px 20px white,
      260px -80px white, -20px 20px white, 10px 10px white, 280px -40px white,
      300px -10px white, 320px -100px white, 290px -110px white,
      100px -100px white, 80px -120px white;
    animation: fall 2.5s linear infinite;
  }

  .snowflake {
    left: 0;
  }

  .snowflake1 {
    top: -80px;
    left: 60px;
    animation-delay: 0.5s;
  }

  .snowflake2 {
    top: -70px;
    left: 100px;
    animation-delay: 1s;
  }

  @keyframes fall {
    0 {
      transform: translateY(-50px);
      opacity: 0.9;
    }
    100% {
      transform: translateY(380px);
      opacity: 0.2;
    }
  }
`;
