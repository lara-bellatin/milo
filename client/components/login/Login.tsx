import React from "react";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";

import LoginForm from "./LoginForm";

export default function Login() {

  return (
    <Flex align="center" justify="center" css={{width:"fill", height:"fill"}}>
        <Flex direction="column" align="center" justify="center" css={{ height: "100%", alignSelf: "center" }}>
          <Text type="displayLarge">Welcome to milo!</Text>
          <LoginForm />
        </Flex>
      </Flex>
  );
}