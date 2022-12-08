export enum BaseColorKey {
  // grayscale
  White = "white",
  Black = "black",
  Gray = "gray",

  // color
  Blue = "blue",
  Green = "green",
}

export type BaseColor = "gray" | "blue";

type GrayColorRange = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
type BlueColorRange = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
type GreenColorRange = 200 | 400 | 600 | 800;

type GrayColorKey =
  | `${BaseColorKey.Gray}${GrayColorRange}`
  | `${BaseColorKey.White}`
  | `${BaseColorKey.Black}`;

type ColorfulColorKey =
  | `${BaseColorKey.Blue}${BlueColorRange}`
  | `${BaseColorKey.Green}${GreenColorRange}`;

export type ColorKey = ColorfulColorKey | GrayColorKey;

export type ColorType = Record<ColorKey, string>;

export const Color: ColorType = {
  white: "#f9fafb",
  black: "#191f28",

  // Gray
  gray100: "#f2f4f6",
  gray200: "#e5e8eb",
  gray300: "#d1d6db",
  gray400: "#b0b8c1",
  gray500: "#8b95a1",
  gray600: "#6b7684",
  gray700: "#4e5968",
  gray800: "#333d4b",

  // Blue
  blue100: "#c9e2ff",
  blue200: "#90c2ff",
  blue300: "#64a8ff",
  blue400: "#4593fc",
  blue500: "#3182f6",
  blue600: "#2272eb",
  blue700: "#1b64da",
  blue800: "#1957c2",
  // Blue
  green200: "#7FBB6C",
  green400: "#5C904B",
  green600: "#417530",
  green800: "#265218",
};

export const colorList: ColorKey[] = Object.keys(Color) as ColorKey[];
