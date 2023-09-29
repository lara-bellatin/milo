import React from "react";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { useGetTodayLogsQuery } from "generated/graphql";
import { LogTable } from "components/logs";

export const TodayView = () => {
  const { data } = useGetTodayLogsQuery();
  const todayLogs = data ? data.todayLogs : [];

  return (
    <Flex direction="column" align="start" justify="start" css={{
      width:"80%",
      "@bp5": {
        width:"100%"
      }
    }}>
      <Text type="displayLarge">
        Today
      </Text>

      <LogTable logs={todayLogs} />

    </Flex>
  )
}