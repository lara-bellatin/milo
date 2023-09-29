import React from "react";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { ViewTab } from "./ViewTab";
import { ViewType } from "./consts";


const views = [ViewType.TODAY, ViewType.THIS_WEEK, ViewType.UNRESOLVED, ViewType.PROJECT_BOARD];

export const DynamicsBar = () => {

  return (
    <Flex direction="column" width="fill">
      <Text type="headingSmall" color="lighter">
        Views
      </Text>

      {views.map((view, key) => (
        <ViewTab
          key={key}
          type={view}
        />
      ))}

    </Flex>
  )
}