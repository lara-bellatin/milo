import React from "react";

import { useUserAuth } from "logic/apollo/use-user-auth";

import { Canvas } from "components/core/Canvas";
import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { TodayView } from "components/views/Today";
import { SideBar } from "components/SideBar";

export const PageHome = () => {
  const { user } = useUserAuth();

  return (
    <Canvas>

      <Flex css={{paddingBottom: "$6"}}>
        <Text type="displayXLarge"> Let's get to work, {user?.displayName}</Text>
      </Flex> 

      <Flex direction="row" justify="between" width="fill" css={{ gap:"$8"}}>
        <SideBar />

        <TodayView />
      </Flex>

    </Canvas>
  );
};
