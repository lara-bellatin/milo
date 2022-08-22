import React from "react";

import { Flex } from "components/core/Flex";
import { Frame } from "components/layouts/frame";

import LoginForm from "./LoginForm";

export default function Login() {

  return (
    <Frame.Outer>
      <Frame.Inner>
        <Flex direction="column" align="center" justify="center" css={{ height: "100%", alignSelf: "center" }}>
          <LoginForm />
        </Flex>
      </Frame.Inner>
    </Frame.Outer>
  );
}