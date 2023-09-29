import React from "react";

import { Flex } from "components/core/Flex";
import { LogContainerClosed } from "../LogContainerClosed";


export const LogTable = ({ logs }) => {

  const pinnedLogs = logs.filter(log => log.pinned);
  const unpinnedLogs = logs.filter(log => !log.pinned);

  return (
    <Flex direction="column" width="fill" align="start" justify="start" css={{gap:"$4"}}>

      {pinnedLogs && (
        <Flex width="fill" css={{
          padding:"$5",
          borderRadius: "$mediumRoundedSquare",
          backgroundColor: "$surfaceCream",
        }}>
  
  
        </Flex>
      )}

      {unpinnedLogs.map((log, key) => (
        <LogContainerClosed
          key={key}
          title={log.title}
          type={log.type}
          status={log.status}
        />
      ))}

    </Flex>
  )
}