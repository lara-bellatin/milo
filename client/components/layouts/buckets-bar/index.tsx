import React from "react";
import { useRouter } from "next/router";

import { useUserAuth } from "logic/apollo/use-user-auth";

import { useBucketsQuery } from "generated/graphql";

import { Flex } from "components/core/Flex";

import { BucketTabItem } from "./BucketTabItem";


export const BucketsBar = () => {
  useUserAuth();
  const { pathname } = useRouter();

  const { data } = useBucketsQuery();
  const buckets = data && data.buckets ? data.buckets : [];

  return (
    <Flex align="center" justify="between" css={{ gap: 40 }}>
    {buckets.map((bucket) => (
      <BucketTabItem key={bucket.id} path={bucket.id} label={bucket.title} active={bucket.id === pathname} />
    ))}
  </Flex>
  );
};


// ADD TOGGLES SO YOU CAN SEE PROJECTS INSIDE BUCKETS AND HIDE THEM -> THEY APPEAR INDENTED WHEN SHOWN