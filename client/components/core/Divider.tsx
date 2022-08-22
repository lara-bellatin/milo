import { styled } from "stitches.config";

export const Divider = styled("hr", {
  border: 0,
  borderStyle: "solid",
  variants: {
    orientation: {
      vertical: {
        height: "100%",
        borderLeftWidth: "1px",
        borderLeftColor: "$borderDefault",
        marginLeft: "$3",
        marginRight: "$3",
      },
      horizontal: {
        width: "100%",
        borderBottomWidth: "1px",
        borderBottomColor: "$borderDefault",
        marginTop: "$3",
        marginBottom: "$3",
      },
    },
  },
});

Divider.defaultProps = {
  orientation: "horizontal",
};
