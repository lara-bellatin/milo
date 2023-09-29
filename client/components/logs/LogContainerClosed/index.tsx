import React from "react";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { Icon } from "components/icons";
import { logStatusIcon, logTypeColor } from "../consts";

export const LogContainerClosed = ({ title, status, type }) => {

  return (
    <Flex direction="column" align="start" width="fill" css={{
      borderRadius:"$lightRoundedSquare",
      "&:hover": {
        opacity: "100%",
        cursor: "pointer",
        backgroundColor: "$surfaceSubdued"
      },
    }}>
      
      <Flex direction="row" align="start" justify="center">
        <Icon which={logStatusIcon[status]} fillColor={logTypeColor[type]} css={{padding: "$2", "&:hover": { opacity: "60%" }}}/>
        <Text type="bodyStrong" css={{lineHeight:"32px"}}>{title}</Text>
      </Flex>

      <Flex>

      </Flex>

    </Flex>
  )
}