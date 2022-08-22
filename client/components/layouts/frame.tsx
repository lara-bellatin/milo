import { styled } from "stitches.config";

export const Outer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100%",
  background: "$canvasPurple",
  padding: 8,
  "@lg": {
    flexDirection: "row",
  },
});

export const Inner = styled("div", {
  display: "flex",
  direction: "column",
  width: "100%",
  minHeight: "100%",
  background: "$white",
  padding: 16,
  borderRadius: 20,
  flex: 1,
  alignItems: "flex-start",
  justifyContent: "center",
});

export const Frame = {
  Outer,
  Inner,
};
