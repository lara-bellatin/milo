import React from "react";

import { useBucketsQuery } from "generated/graphql";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import { Divider } from "@mui/material";
import { BucketItem } from "./BucketItem";


export const BucketBar = () => {
  const { data } = useBucketsQuery();
  const buckets = data ? data.buckets : [];


  return (
    <Flex direction="column" align="start" justify="start" css={{
      width:"20%",
      "@bp5": {
        width:"100%"
      }
    }}>
      <Text type="headingSmall">
        Buckets
      </Text>
      <Divider style={{width:"100%"}} />

      {buckets.map((bucket, key) => (
        <BucketItem
          key={key}
          // id={bucket.id}
          title={bucket.title}
          type={bucket.type}
          status={bucket.status}
        ></BucketItem>
      ))}

    </Flex>
  )
}