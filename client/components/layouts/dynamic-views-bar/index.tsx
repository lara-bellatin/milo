import React from "react";

import Link from "next/link";

import { Box } from "components/core/Box";
import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";

// import SettingsNavigation from "../Settings";
import { TabType } from "./consts";
import { DynamicViewTabs } from "./Tabs";

export const DynamicViewTags = [TabType.TODAY, TabType.THIS_WEEK, TabType.UNRESOLVED, TabType.PROJECT_BOARD];

interface NavbarProps {
  tabs?: Array<TabType>;
}

export const DynamicViewsBar: React.FC<NavbarProps> = ({ tabs = DynamicViewTags }) => {
  return (
    <Flex direction="column" align="center" justify="between" css={{ height: 72, padding: "$5" }}>

      <Flex css={{ "@md": { flexGrow: 1, flexBasis: 0 } }}>
        <Link href="/" passHref>
          <a>
            {/* <Logo which={LogosEnum.WORDMARK} fillColor={colors.textWhite} /> */}
            <Text type="heading">milo</Text>
          </a>
        </Link>
      </Flex>

      <Box css={{ display: "none", "@md": { display: "block" } }}>
        <DynamicViewTabs tabs={tabs} />
      </Box>

      {/* <Flex css={{ "@md": { flexGrow: 1, flexBasis: 0 } }}>
        <SettingsNavigation />
      </Flex> */}
    </Flex>
  );
};