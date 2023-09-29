import React from "react";

import { useRouter } from "next/router";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { Icon } from "components/icons";
import { ViewType, VIEWS } from "../consts";


export const ViewTab = ({ type }: { type: ViewType }) => {
  const { path, icon, fill, label } = VIEWS[type];
  const router = useRouter();

  const events = {
    press() {
      router.push(path);
    },
  };

  return (
    <Flex direction="row" align="center" width="fill" onClick={events.press} css={{
      borderRadius:"$lightRoundedSquare",
      "&:hover": {
        opacity: "100%",
        cursor: "pointer",
        backgroundColor: "$surfaceSubdued"
      },
    }}>
      <Icon which={icon} fillColor={fill} css={{padding: "$2"}}/>
      <Text type="bodyStrong">{label}</Text>
    </Flex>
  )
}