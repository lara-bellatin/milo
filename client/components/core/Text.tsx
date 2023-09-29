import { typographyVariants } from "theme";

import { styled } from "../../stitches.config";

export const Text = styled("span", {
  margin: "0",
  ...typographyVariants.caption,
  fontFamily: "$graphik",
  "-webkit-font-smoothing": "antialiased",
  wordBreak: "normal",
  overflowWrap: "anywhere",

  variants: {
    type: {
      ...typographyVariants,
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    color: {
      default: {
        color: "$textDefault",
      },
      white: {
        color: "$white",
      },
      light: {
        color: "$textLight",
      },
      lighter: {
        color: "$textLighter",
      },
      success: {
        color: "$textSuccess",
      },
      error: {
        color: "$textError",
      },
    },
    weight: {
      normal: {
        fontWeight: "$normal",
      },
      medium: {
        fontWeight: "$medium",
      },
      semiBold: {
        fontWeight: "$semiBold",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
  },
});

Text.defaultProps = {
  color: "default",
};
