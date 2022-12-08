import { HTMLAttributes, useEffect, useRef } from "react";

import lottie from "lottie-web";

import * as S from "./Lottie.style";

type Props = {
  loop?: boolean;
  autoplay?: boolean;
  animationData: any;
};

const Lottie = ({
  loop = false,
  autoplay = false,
  animationData,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lottieContainer.current) {
      return;
    }

    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
    });
  }, [animationData, autoplay, loop]);

  return (
    <S.Layout {...props}>
      <div ref={lottieContainer} />
    </S.Layout>
  );
};

export default Lottie;
