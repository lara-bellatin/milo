import React from "react";


import { useUserAuth } from "logic/apollo/use-user-auth";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { BucketsBar } from "components/layouts/buckets-bar";

export const PageHome = () => {
  const { user } = useUserAuth();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="fill"
      css={{
        padding: "12px",
        height: "100%",
        maxWidth: "960px",
        "@sm": {
          padding: "24px",
        },
      }}
    >

      <Flex>
        <Text> Welcome {user?.displayName}</Text>
        <BucketsBar />
      </Flex>  

    </Flex>
  );
};
