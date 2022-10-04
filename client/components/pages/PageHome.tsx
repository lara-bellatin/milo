import React from "react";

import { useUserAuth } from "logic/apollo/use-user-auth";

import { Canvas } from "components/core/Canvas";
import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { BucketBar } from "components/BucketBar";

export const PageHome = () => {
  const { user } = useUserAuth();

  return (
    <Canvas>

      <Flex css={{paddingBottom: "$6"}}>
        <Text type="displayXLarge"> Let's get to work, {user?.displayName}</Text>
      </Flex> 

      <BucketBar />

    </Canvas>
  );
};
