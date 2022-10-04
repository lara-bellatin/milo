import React from "react";

// import { useRouter } from "next/router";

import { colors } from "theme";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { Icon, IconsEnum } from "components/icons";

import { BucketStatus, BucketType } from "generated/graphql";


const FillByStatus = {
  [BucketStatus.NotStarted]: colors.decorativeChampagne,
  [BucketStatus.InProgress]: colors.iconMint,
  [BucketStatus.Waiting]: colors.iconCritical,
  [BucketStatus.Passive]: colors.decorativeYellow,
  [BucketStatus.Completed]: colors.decorativeMoss,
  [BucketStatus.Canceled]: colors.iconSubdued,
};

const IconByType = {
  [BucketType.Area]: IconsEnum.SQUARE,
  [BucketType.Project]: IconsEnum.TRIANGLE,
};


export const BucketItem = ({title, type, status}) => {
  return (
    <Flex direction="row" align="center">
      <Icon which={IconByType[type]} fillColor={FillByStatus[status]} css={{margin: "$1"}}/>
      <Text type="bodyStrong">{title}</Text>
    </Flex>
  )
}