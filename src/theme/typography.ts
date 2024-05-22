// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
// import {
//   DMSans_400Regular as DMSansRegular,
//   DMSans_500Medium as DMSansMedium,
//   DMSans_700Bold as DMSansBold
// } from "@expo-google-fonts/dm-sans"

// import {
//   OpenSans_400Regular as OpenSansRegular,
//   OpenSans_500Medium as OpenSansMedium,
//   OpenSans_700Bold as OpenSansBold
// } from "@expo-google-fonts/open-sans"


// export const customFontsToLoad = {
//   DMSansRegular,
//   DMSansMedium,
//   DMSansBold,
//   OpenSansRegular,
//   OpenSansMedium,
//   OpenSansBold
// }


const fonts = {
  dmSans: {
    // Cross-platform Google font.

    normal: "DMSansRegular",
    medium: "DMSansMedium",
    bold: "DMSansBold",
  },
  openSans: {
    // Cross-platform Google font.
  
    normal: "OpenSansRegular",
    medium: "OpenSansMedium",
    bold: "OpenSansBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * Heading H1, H2, H3, and so on..
   */
  headers: fonts.dmSans,
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.openSans,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.openSans, android: fonts.openSans }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
