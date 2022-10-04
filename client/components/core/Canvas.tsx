import React from "react";
import { Box } from "./Box";

import { borderVariants } from "theme";

import { styled } from "stitches.config";

export type BoxProps = React.ComponentProps<typeof Box>;

export const Canvas = styled("div", {
  margin: "10% 15%",
  width: "70vw",
  height: "80vh",
  variants: {
    border: {
      ...borderVariants,
    },
  },
});
