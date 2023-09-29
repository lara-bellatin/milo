import React from "react";

import { DynamicsBar } from "./DynamicsBar";
import { BucketsBar } from "./BucketsBar";

import { Flex } from "components/core/Flex";


export const SideBar = () => {
  return (
    <Flex direction="column" justify="start" align="start" width="fill" css={{
      gap:"$4",
      width:"30%",
      "@bp5": {
        width:"100%"
      }
    }}>
      <DynamicsBar />
      <BucketsBar />
    </Flex>
  )
}