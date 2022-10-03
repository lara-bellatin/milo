import Link from "next/link";

import { styled } from "stitches.config";

import { Button } from "components/core/Button";
import { Text } from "components/core/Text";
import { Icon } from "components/icons";

import { TABS, TabType } from "../consts";

interface Props {
  type: TabType;
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

export function DynamicViewTabItem({ type, active }: Props) {
  const tab = TABS[type];
  const icon = active ? tab.icon[0] : tab.icon[1];

  let fillColor = "#fff";

  return (
    <Link href={tab.path} passHref>
      <TabButton as="a" type="plain" active={active} data-cy={`nav-${tab.label.toLowerCase()}`}>
        <Icon which={icon} fillColor={fillColor} width="16" />
        <Text type="body" color="white" css={{ display: "none", "@md": { display: "block", marginLeft: 8 } }}>
          {tab.label}
        </Text>
      </TabButton>
    </Link>
  );
}