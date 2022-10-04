import React from "react";

// import { useRouter } from "next/router";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { Icon } from "components/icons";
import { ViewType, VIEWS } from "../consts";


export const ViewTab = (type: ViewType) => {

  return (
    <Flex direction="row" align="center">
      <Icon which={VIEWS[type].icon} fillColor={VIEWS[type].fill} css={{margin: "$1"}}/>
      <Text type="bodyStrong">{VIEWS[type].label}</Text>
    </Flex>
  )
}