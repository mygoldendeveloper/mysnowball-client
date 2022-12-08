import { Color } from ".";

import type { ColorType } from ".";

export interface ThemeType {
  color: ColorType;
}

export const Theme: ThemeType = {
  color: Color,
};
