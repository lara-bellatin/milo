import React from "react";

import { media } from "theme";

import { User } from "generated/graphql";

import { useUserAuth } from "logic/apollo/use-user-auth";
import { useStore } from "logic/store/global-store";

import { useMedia } from "hooks/useMedia";

import { Text } from "components/core/Text";
import { Flex } from "components/core/Flex";

export const HomePage = () => {
  useUserAuth();
  const { state } = useStore();
  const isDesktop = useMedia<boolean>([media.md], [true], false);
  const user: User = state.user;

  const page = (
    <Flex
      direction="column"
      align="center"
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

      <Flex
        direction="column"
        css={{ gap: isDesktop ? "40px" : "20px", maxWidth: "624px", width: "100%", marginTop: "$6" }}
      >
        <Text>Welcome, {user.displayName}</Text>
      </Flex>
    </Flex>
  );
  return (
    <div className="module">
      <div className="page-container">
        {[page]}
      </div>

      <style jsx>{`
        .module {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 0px 8px 0px 8px;
        }

        .page-container {
          flex: 1;
          width: 100%;
          height: 100%;
          margin: 0 auto;
        }

        .content {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
