"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
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
    ARCHIVED
    CANCELED
  }

  ## INPUTS

  input CreateBucketInput {
    id: String!
    title: String!
    description: String
    type: BucketType!
    dueDate: String
    completedAt: String
  }

  input UpdateBucketInput {
    id: String!
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
    sequences: [Sequence]
    logs: [Log]
  }


  ## ENDPOINTS

  type Query {
    bucket(id: String!): Bucket
    buckets: [Bucket!]!
  }

  type Mutation {
    createBucket(input: CreateBucketInput!): Bucket!
    updateBucket(input: UpdateBucketInput!): Bucket!
    cancelBucket(id: String!): Bucket
    completeBucket(id: String!): Bucket
  }


`;
//# sourceMappingURL=buckets.js.map