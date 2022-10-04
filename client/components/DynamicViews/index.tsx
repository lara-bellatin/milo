import React from "react";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { Divider } from "@mui/material";
import { ViewTab } from "./ViewTab";
import { VIEWS } from "./consts";


export const DynamicsBar = () => {

  return (
    <Flex direction="column" align="start" justify="start" css={{
      width:"20%",
      "@bp5": {
        width:"100%"
      }
    }}>
      <Text type="headingSmall">
        Buckets
      </Text>
      <Divider style={{width:"100%"}} />

      {VIEWS.map((bucket, key) => (
        <ViewTab
          key={key}
          // id={bucket.id}
          title={bucket.title}
          type={bucket.type}
          status={bucket.status}
        />
      ))}

    </Flex>
  )
}