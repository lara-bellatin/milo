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
  textSuccess: "#57A773",
  textCritical: "#D72C0D",
  textWarning: "#916A00",
  textLink: "#9BD1E5",
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
  borderHighlight: "#9BD1E5",
  borderHighlightSubdued: "#D1FAFF",
};
const canvasColors = {
  canvasPurple: "#9BD1E5",
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
  iconHighlight: "#9BD1E5",
  iconWhite: "#FFFFFF",
  iconMint: "#AFD5C3"
};
const buttonColors = {
  // Primary
  buttonPrimaryDefault: "#7F9D9F",
  buttonPrimaryHover: "#8BA5A7",
  buttonPrimaryPressed: "#739396",
  // Secondary
  buttonSecondaryDefault: "#F0F7F4",
  buttonSecondaryHover: "#F0F7F4",
  buttonSecondaryPressed: "#F0F7F4",
  // Destructive
  buttonDestructiveDefault: "#D72C0D",
  buttonDestructiveHover: "#B22000",
  buttonDestructivePressed: "#941900",
  // Shared
  buttonDisabled: "#F2F2F3",
};
const decorativeColors = {
  decorativeChampagne: "#FED18C",
  decorativeOrange: "#FE654F",
  decorativeYellow: "#F6C626",
  decorativeMoss: "#A4B96D",
  decorativeTuscan: "#885053",

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
