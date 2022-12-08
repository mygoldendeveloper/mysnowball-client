import { ButtonHTMLAttributes } from "react";

import * as S from "./KakaoButton.style";

export interface KakaoLoginButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const KakaoLoginButton = ({ ...rest }: KakaoLoginButtonProps) => {
  return (
    <S.Button type="button" {...rest}>
      <svg
        version="1.0"
        width={20}
        height={20}
        viewBox="0 0 66.000000 60.000000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
          fill="black"
          stroke="none"
        >
          <path
            d="M255 590 c-3 -5 -15 -10 -26 -10 -27 0 -99 -41 -135 -77 -61 -60 -80
-151 -48 -229 16 -38 87 -114 106 -114 11 0 4 -56 -15 -107 -8 -25 -8 -36 1
-45 9 -9 12 -9 12 0 0 7 4 12 10 12 5 0 37 20 72 44 58 40 69 44 144 49 97 7
150 31 215 99 106 109 68 272 -82 348 -21 11 -47 20 -58 20 -11 0 -23 5 -26
10 -3 6 -42 10 -85 10 -43 0 -82 -4 -85 -10z"
          />
        </g>
      </svg>
      <span>
        카카오로 <b>1초 만에</b> 로그인
      </span>
      <S.EmptyBox />
    </S.Button>
  );
};

export default KakaoLoginButton;
