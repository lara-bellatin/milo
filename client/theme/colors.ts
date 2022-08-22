/*
 * * * * *
 * COLORS
 * * * * *
 */

const white = "#FFFFFF";

/** NAMED COLOR GROUPS **/
const textColors = {
  textDefault: "#2B2A35",
  textSubdued: "#616A7E",
  textDisabled: "#BABEC3",
  textSuccess: "#16744D",
  textCritical: "#D72C0D",
  textWarning: "#916A00",
  textLink: "#7352FF",
  textWhite: "#FFFFFF",
};
const surfaceColors = {
  surfaceDefault: "#FFFFFF",
  surfaceSubdued: "#FAFAFA",
  surfaceDisabled: "#FAFBFB",
  surfaceHover: "#FCFCFD",
  surfaceSuccess: "#D4F7E9",
  surfaceSuccessSubdued: "#EAFBF4",
  surfaceCritical: "#FCD6CF",
  surfaceCriticalSubdued: "#FEEAE7",
  surfaceWarning: "#FFEEC2",
  surfaceWarningSubdued: "#FFF3D6",
  surfaceHighlightSubduded: "rgba(115, 82, 255, 0.15)",
  surfaceOverlay: "rgba(43, 42, 53, 0.6)",
  surfaceLoadingGradient: "linear-gradient(270deg, #BABEC3 -40.63%, rgba(186, 190, 195, 0.3) 157.81%)",
};
const borderColors = {
  borderDefault: "#EDEDED",
  borderDisabled: "#E0E0E0",
  borderHover: "#E0E0E0",
  borderSuccess: "#16744D",
  borderSuccessSubdued: "#95C9B4",
  borderCritical: "#D72C0D",
  borderCriticalSubdued: "#E0B3B2",
  borderHighlight: "#7352FF",
  borderHighlightSubdued: "#9C95C9",
};
const canvasColors = {
  canvasPurple: "#7352FF",
  canvasBlack: "#191919",
  canvasCream: "#F7F2E4",
};
const iconColors = {
  iconDefault: "#2B2A35",
  iconSubdued: "#616A7E",
  iconDisabled: "#BABEC3",
  iconSuccess: "#16744D",
  iconCritical: "#D72C0D",
  iconWarning: "#916A00",
  iconHighlight: "#7352FF",
  iconWhite: "#FFFFFF",
};
const buttonColors = {
  // Primary
  buttonPrimaryDefault: "#2B2A35",
  buttonPrimaryHover: "#424254",
  buttonPrimaryPressed: "#0B0B0E",
  // Secondary
  buttonSecondaryDefault: "#FFFFFF",
  buttonSecondaryHover: "#F6F6F7",
  buttonSecondaryPressed: "#F1F2F3",
  // Destructive
  buttonDestructiveDefault: "#D72C0D",
  buttonDestructiveHover: "#B22000",
  buttonDestructivePressed: "#941900",
  // Shared
  buttonDisabled: "#F2F2F3",
};
const decorativeColors = {
  decorativeGreen: "#2ED792",
  decorativeOrange: "#FF573D",
  decorativeYellow: "#F6C626",
  decorativeMoss: "#A4B96D",
};

export const colors = {
  white,
  // Named color groups
  ...textColors,
  ...surfaceColors,
  ...borderColors,
  ...canvasColors,
  ...iconColors,
  ...buttonColors,
  ...decorativeColors,
};
