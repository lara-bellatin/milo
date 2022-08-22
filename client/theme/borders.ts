import { Variant } from "stitches.config";

export const borderVariants: Variant["x"] = {
  default: {
    border: "1px solid",
    borderColor: "$borderDefault",
  },
  bottomDefault: {
    borderBottom: "1px solid",
    borderColor: "$borderDefault",
  },
  topDefault: {
    borderTop: "1px solid",
    borderColor: "$borderDefault",
  },
  bottomCritical: {
    borderBottom: "1px solid",
    borderColor: "$borderCritical",
  },
};
