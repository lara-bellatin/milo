import { CSS, createStitches } from "@stitches/react";

import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "theme";

export const { styled, getCssText, theme, config } = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
});

export type Variant = {
  [Name in string]: {
    [Pair in number | string]: CSS<{ theme: typeof theme }>;
  };
};
