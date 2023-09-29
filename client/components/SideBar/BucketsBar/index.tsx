import React from "react";

import { useBucketsQuery } from "generated/graphql";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { BucketItem } from "./BucketItem";


export const BucketsBar = () => {
  const { data } = useBucketsQuery();
  const buckets = data ? data.buckets : [];


  return (
    <Flex direction="column" width="fill">
      <Text type="headingSmall" color="lighter">
        Buckets
      </Text>

      {buckets.map((bucket, key) => (
        <BucketItem
          key={key}
          id={bucket.id}
          title={bucket.title}
          type={bucket.type}
          status={bucket.status}
        ></BucketItem>
      ))}

    </Flex>
  )
}