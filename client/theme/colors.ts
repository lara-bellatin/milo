/*
 * * * * *
 * COLORS
 * * * * *
 */

const white = "#FFFFFF";

/** NAMED COLOR GROUPS **/
const textColors = {
  textDefault: "#2b2a36",
  textLight: "#5f6a80",
  textLighter: "#b9bec4",
  textWhite: "#ffffff",
  textSuccess: "#16744D",
  textError: "#EA4B2E",
  textLink: "#8bd3e8",
};
const surfaceColors = {
  surfaceDefault: "#ffffff",
  surfaceSubdued: "#f2f2f2",
  surfaceDarker: "#b8b9bb",
  surfaceCream: "#f3f1ea",
  surfaceMint: "#deede7",
  surfaceFireOrange: "#ffc9c3",
  surfaceYellow: "#fae7b2",
  surfaceGreen: "#cad6d7",
  surfaceGrey: "#e5e7e8",
  surfaceSuccess: "#cce8de",
  surfaceError: "#f8beb6",
};
const borderColors = {
  borderDefault: "#EDEDED",
  borderDisabled: "#E0E0E0",
  borderHover: "#E0E0E0",
  borderSuccess: "#16744D",
  borderSuccessSubdued: "#95C9B4",
  borderError: "#D72C0D",
  borderErrorSubdued: "#E0B3B2",
};

const iconColors = {
  iconDefault: "#2B2A35",
  iconLight: "#5f6a80",
  iconLighter: "#b9bec4",
  iconWhite: "#FFFFFF",
  iconSuccess: "#16744D",
  iconError: "#EA4B2E",
  iconCream: "#eee7d7",
  iconMint: "#AFD5C3",
  iconFireOrange: "#ff5643",
  iconYellow: "#ffc400",
  iconGreen: "#84a6a8",
  iconGrey: "#d2d6da",
};
const buttonColors = { // Needs Changing
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

export const colors = {
  white,
  // Named color groups
  ...textColors,
  ...surfaceColors,
  ...borderColors,
  ...iconColors,
  ...buttonColors,
};
