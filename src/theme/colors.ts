import { Theme } from "@react-navigation/native"

const palette = {

  //Nine shades of Grey
  neutral100: "#FFFFFF",
  neutral200: "#f7f7f7",
  neutral300: "#e9e9e9",
  neutral400: "#c7c7c7",
  neutral500: "#a9a9a9",
  neutral600: "#7f7f7f",
  neutral700: "#6a6a6a",
  neutral800: "#4b4b4b",
  neutral900: "#292929",

  primary100: "#CDD8DB", //Teal pale
  primary200: "#8cbad3",
  primary300: "#679db9",
  primary400: "#4b87a5",
  primary500: "#0E7799", //Teal light
  primary600: "#1a6581",
  primary700: "#04516B", //primary reference
  primary800: "#003f56",
  primary900: "#002a3e",

  secondary100: "#FFFAEB",
  secondary200: "#FFE38F",
  secondary300: "#FFD24D",
  secondary400: "#ffc825",
  secondary500: "#ffbf00", //Secondary reference
  secondary600: "#ffb100",
  secondary700: "#ff9e00",
  secondary800: "#ff8d00",
  secondary900: "#ff6d00",

  inactive: "#839DA5",


  //orange
  accent100: "#FEF3E6",
  accent300: "#FBD8AA",
  accent500: "#F48C06",

  //Red
  angry100: "#FCE9E7",
  angry300: "#F3CECA",
  angry500: "#E52210",

  //Green
  calm100: "#D3FCD5",
  calm500: "#6CC15A",

  //Black
  black: "#000000",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const



export const colors = {
  /**
   * 
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral900,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry100,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry500,

  primary: palette.primary700,
  onPrimary: palette.neutral100,
  secondary: palette.secondary500,
  onSecondary: palette.neutral900,
  backdrop: "rgba(0, 0, 0, 0.2)",
  translucent: "rgba(255, 255, 255, 0.4)",
}


export const DarkMode: Theme = {
  dark: true,
  colors: {
    primary: colors.primary,
    background: colors.background,
    card: colors.palette.primary100,
    text: colors.text,
    border: colors.border,
    notification: 'rgb(255, 69, 58)',
  },
};

export const LightMode: Theme = {
  dark: false,
  colors: {
    primary: colors.primary,
    background: colors.background,
    card: colors.palette.primary100,
    text: colors.text,
    border: colors.border,
    notification: 'rgb(255, 69, 58)',
  },
};




