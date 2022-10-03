import { colors } from "theme";

import { styled } from "stitches.config";

import { IconsEnum } from "components/icons/icons-enum";
import { iconsMapping } from "components/icons/icons-mapping";

export * from "components/icons/icons-enum";
export * from "components/icons/icons-mapping";

const IconWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

type IconWrapperProps = React.ComponentProps<typeof IconWrapper>;

type IconProps = IconWrapperProps & {
  which: IconsEnum | string;
  fillColor?: string;
  fillColors?: string[];
  width?: any;
  height?: any;
};

export const Icon: React.FC<IconProps> = ({
  which,
  fillColor = colors.iconWhite,
  fillColors = [],
  width = null,
  height = null,
  ...props
}) => {
  return <IconWrapper {...props}>{iconsMapping[which]({ fill: fillColor, fillColors, width, height })}</IconWrapper>;
};
