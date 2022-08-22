import { CSS, createStitches } from "@stitches/react";

import { colors, fontSizes, fontWeights, fonts, lineHeights, media, radii, shadows, space } from "./theme";

export const { styled, getCssText, theme, config } = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    shadows,
    space,
  },
  media,
});

export type Variant = {
  [Name in string]: {
    [Pair in number | string]: CSS<{ media: typeof media; theme: typeof theme }>;
  };
};
