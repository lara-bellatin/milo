import { styled } from "stitches.config";

export const InputBaseWrapper = styled("div", {
  display: "flex",
  gap: "$4",
  alignItems: "center",
  flexWrap: "wrap",
  textAlign: "left",
  appearance: "none",
  transition: "all .25s ease",
  background: "none",
  width: "100%",
  padding: "13px $4",
  borderRadius: "$mediumRoundedSquare",
  border: "1px solid $borderDefault",
  fontSize: "$small",
  fontFamily: "$graphik",
  color: "$textDefault",
  outline: "none",
  "&:disabled": {
    borderColor: "$borderDisabled",
    background: "#FAFBFB",
    color: "$textDisabled",
  },
  "&:hover": {
    borderColor: "$textDefault",
    background: "$surfaceHover",
  },
  "&:focus": {
    borderColor: "$textDefault",
    background: "$surfaceHover",
  },
  variants: {
    error: {
      true: {
        borderColor: "$textCritical",
        background: "$surfaceCriticalSubdued",
      },
    },
    focused: {
      true: {
        borderColor: "$textDefault",
        background: "$surfaceHover",
      },
    },
  },
});

export const InputBase = styled("input", {
  appearance: "none",
  border: "none",
  background: "none",
  overflow: "hidden",
  minWidth: "30px",
  padding: "$1 $1 $1 0",
  flexGrow: 1,
  "&::placeholder": {
    color: "$textDisabled",
  },
  "&:focus": {
    outline: 0,
  },
});
