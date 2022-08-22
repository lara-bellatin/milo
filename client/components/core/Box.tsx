import React from "react";

import { borderVariants } from "theme";

import { styled } from "stitches.config";

export type BoxProps = React.ComponentProps<typeof Box>;

export const Box = styled("div", {
  variants: {
    hidden: {
      true: {
        visibility: "hidden",
      },
    },
    border: {
      ...borderVariants,
    },
  },
});
