import Link from "next/link";

import { styled } from "stitches.config";

import { Button } from "components/core/Button";
import { Text } from "components/core/Text";
import { Icon, IconsEnum } from "components/icons";

interface Props {
  path: string;
  label: string;
  active: boolean;
}

const TabButton = styled(Button, {
  minWidth: "unset",
  display: "flex",
  padding: "4px 12px",
  "&:hover": {
    background: "#FFFFFF1A",
  },
  variants: {
    active: {
      true: {
        background: "#FFFFFF1A",
      },
    },
  },
});

export function BucketTabItem({ path, label, active }: Props) {
  let fillColor = "#fff";

  return (
    <Link href={path} passHref>
      <TabButton as="a" type="plain" active={active} data-cy={`nav-${label.toLowerCase()}`}>
        <Icon which={IconsEnum.EXPAND} fillColor={fillColor} width="16" />
        <Text type="body" color="white" css={{ display: "none", "@md": { display: "block", marginLeft: 8 } }}>
          {label}
        </Text>
      </TabButton>
    </Link>
  );
}