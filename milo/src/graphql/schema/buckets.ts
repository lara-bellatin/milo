import { gql } from "apollo-server-express";

export default gql`
  ## ENUMS

  enum BucketType {
    AREA
    PROJECT
  }
  
  enum BucketStatus {
    NOT_STARTED
    IN_PROGRESS
    WAITING
    PASSIVE
    COMPLETED
    CANCELED
  }

  ## INPUTS

  input CreateBucketInput {
    title: String!
    description: String
    type: BucketType!
    dueDate: String
  }

  input UpdateBucketInput {
    bucketId: String!
    title: String
    description: String
    type: BucketType
    dueDate: String
  }

  ## TYPES

  type Bucket {
    id: String!
    title: String!
    description: String
    type: BucketType!
    status: BucketStatus!
    dueDate: String
    createdAt: String
    updatedAt: String
    completedAt: String
    canceledAt: String
    userId: String!
    sequences: [Sequence]
    logs: [Log]
    owner: User
  }


  ## ENDPOINTS

  type Query {
    bucket(bucketId: String!): Bucket
    buckets: [Bucket!]!
  }

  type Mutation {
    createBucket(input: CreateBucketInput!): Bucket!
    updateBucket(input: UpdateBucketInput!): Bucket!
    cancelBucket(bucketId: String!): Bucket
    completeBucket(bucketId: String!): Bucket
  }


`