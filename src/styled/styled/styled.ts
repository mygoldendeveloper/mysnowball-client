import { createStyled } from "../createStyled";
import { injectEmotionStylesGenerator } from "../inject-styles";

export interface ProcessEnv {
  [key: string]: string | undefined;
}

const injectStylesGenerator = injectEmotionStylesGenerator;

export const styled = createStyled({ injectStylesGenerator });
