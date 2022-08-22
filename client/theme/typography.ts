import { Variant } from "stitches.config";

/*
 * * * * * * *
 * TYPOGRAPHY
 * * * * * * *
 */

/** PRIMITIVES **/
export const fonts = {
  graphik: "Graphik, sans-serif",
  mintGrotesk: "Mint Grotesk, sans-serif",
};
export const fontSizes = {
  tiny: "12px",
  small: "14px",
  small2: "16px",
  medium: "18px",
  medium2: "20px",
  medium3: "22px",
  large: "24px",
  large2: "26px",
  large3: "28px",
  huge: "42px",
};
export const fontWeights = {
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};
export const lineHeights = {
  tiny: "16px",
  small: "20px",
  small2: "22px",
  small3: "24px",
  small4: "26px",
  small5: "28px",
  medium: "32px",
  large: "44px",
};

/** VARIANTS **/
export const typographyVariants: Variant["x"] = {
  caption: {
    fontFamily: "$graphik",
    fontSize: "$tiny",
    lineHeight: "$tiny",
    fontWeight: "$normal",
  },
  captionStrong: {
    fontFamily: "$graphik",
    fontSize: "$tiny",
    lineHeight: "$tiny",
    fontWeight: "$medium",
  },
  body: {
    fontFamily: "$graphik",
    fontSize: "$small",
    lineHeight: "$small",
    fontWeight: "$normal",
  },
  bodyStrong: {
    fontFamily: "$graphik",
    fontSize: "$small",
    lineHeight: "$small",
    fontWeight: "$medium",
  },
  button: {
    fontFamily: "$graphik",
    fontSize: "$small",
    lineHeight: "$small",
    fontWeight: "$medium",
  },
  subheading: {
    fontFamily: "$graphik",
    fontSize: "$tiny",
    lineHeight: "$tiny",
    fontWeight: "$medium",
  },
  headingSmall: {
    fontFamily: "$graphik",
    fontSize: "$small2",
    lineHeight: "$small3",
    fontWeight: "$semiBold",
  },
  headingMedium: {
    fontFamily: "$graphik",
    fontSize: "$medium2",
    lineHeight: "$small3",
    fontWeight: "$medium",
    "@sm": {
      fontFamily: "$graphik",
      fontSize: "$medium3",
      lineHeight: "$small5",
      fontWeight: "$medium",
    },
  },
  headingMediumBold: {
    fontFamily: "$graphik",
    fontSize: "$medium2",
    lineHeight: "$small3",
    fontWeight: "$semiBold",
    "@sm": {
      fontFamily: "$graphik",
      fontSize: "$medium3",
      lineHeight: "$small5",
      fontWeight: "$semiBold",
    },
  },
  displaySmall: {
    fontFamily: "$mintGrotesk",
    fontSize: "$small2",
    lineHeight: "$small2",
    fontWeight: "$medium",
    "@sm": {
      fontFamily: "$mintGrotesk",
      fontSize: "$medium",
      lineHeight: "$small2",
      fontWeight: "$medium",
    },
  },
  displayMedium: {
    fontFamily: "$mintGrotesk",
    fontSize: "$medium2",
    lineHeight: "$medium",
    fontWeight: "$bold",
    "@sm": {
      fontFamily: "$mintGrotesk",
      fontSize: "$large2",
      lineHeight: "$medium",
      fontWeight: "$bold",
    },
  },
  displayLarge: {
    fontFamily: "$mintGrotesk",
    fontSize: "$large",
    lineHeight: "$medium",
    fontWeight: "$bold",
    "@sm": {
      fontFamily: "$mintGrotesk",
      fontSize: "$large3",
      lineHeight: "$medium",
      fontWeight: "$bold",
    },
  },
  displayXLarge: {
    fontFamily: "$mintGrotesk",
    fontSize: "$large3",
    lineHeight: "$large",
    fontWeight: "$bold",
    "@sm": {
      fontFamily: "$mintGrotesk",
      fontSize: "$huge",
      lineHeight: "$large",
      fontWeight: "$bold",
    },
  },
};
