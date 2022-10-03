import { colors, typographyVariants } from "theme";

import { styled } from "stitches.config";

export const Button = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  border: 0,
  background: 0,
  appearance: "none",
  borderRadius: "$rounded",
  minWidth: "110px",
  ...typographyVariants.button,
  cursor: "pointer",
  gap: "$3",
  "&:disabled": {
    background: colors.buttonDisabled,
    cursor: "not-allowed",
    "&:hover": {
      background: colors.buttonDisabled,
    },
  },
  variants: {
    width: {
      none: {
        minWidth: "unset",
      },
      default: {},
      fill: {
        display: "flex",
        width: "100%",
      },
    },
    size: {
      none: {
        padding: 0,
      },
      small: {
        padding: "5px 16px",
      },
      medium: {
        padding: "10px 16px",
      },
      large: {
        padding: "14px 16px",
      },
    },
    kind: {
      primary: {
        backgroundColor: "$textDefault",
        color: "$white",
        "&:hover": {
          backgroundColor: colors.buttonPrimaryHover,
        },
        "&:active": {
          backgroundColor: colors.buttonPrimaryPressed,
        },
      },
      danger: {
        background: "$textCritical",
        color: "$white",
        "&:hover": {
          backgroundColor: colors.buttonDestructiveHover,
        },
        "&:active": {
          background: colors.buttonDestructivePressed,
        },
      },
      secondary: {
        background: "$white",
        color: "$textDefault",
        border: "1px solid $borderDefault",
        "&:hover": {
          background: colors.buttonSecondaryHover,
        },
        "&:active": {
          background: colors.buttonSecondaryPressed,
        },
        "&:disabled": {
          color: "$textDisabled",
        },
      },
      plain: {
        background: "none",
        color: "$canvasPurple",
        fontWeight: "$medium",
        "&:disabled": {
          color: "$textDisabled",
          background: "none",
          "&:hover": {
            background: "none",
          },
        },
      },
      ghost: {
        borderRadius: "$regularRoundedSquare",
        background: "transparent",
        color: "$canvasPurple",
        "&:hover": {
          background: colors.buttonSecondaryHover,
        },
        "&:active": {
          background: colors.buttonSecondaryPressed,
        },
      },
    },
    fit: {
      icon: {
        minWidth: 0,
        padding: "$3",
      },
    },
    position: {
      footer: {
        position: "fixed",
        width: "calc(100% - 32px)",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)",
        zIndex: 98,
        "@md": { display: "none" },
      },
    },
  },
});

Button.defaultProps = {
  size: "small",
  kind: "primary",
  width: "default",
};
