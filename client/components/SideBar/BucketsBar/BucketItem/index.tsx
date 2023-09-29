import React from "react";

import { useRouter } from "next/router";

import { colors } from "theme";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { Icon, IconsEnum } from "components/icons";

import { BucketStatus, BucketType } from "generated/graphql";

const FillByStatus = {
  [BucketStatus.NotStarted]: colors.iconCream,
  [BucketStatus.InProgress]: colors.iconMint,
  [BucketStatus.Waiting]: colors.iconFireOrange,
  [BucketStatus.Passive]: colors.iconYellow,
  [BucketStatus.Completed]: colors.iconGreen,
  [BucketStatus.Canceled]: colors.iconGrey,
};

const IconByType = {
  [BucketType.Area]: IconsEnum.SQUARE,
  [BucketType.Project]: IconsEnum.TRIANGLE,
};


export const BucketItem = ({id, title, type, status}) => {
  const router = useRouter();

  const events = {
    press() {
      router.push(`/buckets/${id}`);
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
      <Icon which={IconByType[type]} fillColor={FillByStatus[status]} css={{padding: "$2"}}/>
      <Text type="bodyStrong">{title}</Text>
    </Flex>
  )
}