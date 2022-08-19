"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
  ## ENUMS
  enum SequenceStatus {
    ACTIVE
    COMPLETED
    CANCELED
  }

  ## INPUTS

  input CreateSequenceInput {
    id: String!
    title: String!
    description: String
    dueDate: String
    completedAt: String
    logInput: [CreateLogInput]
  }

  input UpdateSequenceInput {
    id: String!
    title: String
    description: String
    type: BucketType
    dueDate: String
    logInput: [CreateLogInput]
    deletedLogs: [String!]
  }

  ## TYPES

  type Sequence {
    id: String!
    title: String!
    status: SequenceStatus!
    createdAt: String
    updatedAt: String
    completedAt: String
    canceledAt: String
    sequences: [Sequence]
    logs: [Log]
  }


  ## ENDPOINTS

  type Query {
    sequence(id: String!): Sequence
    sequences: [Sequence!]!
    sequenceLogs(id: String!): [Log!]!
  }

  type Mutation {
    createSequence(input: CreateSequenceInput!): Sequence!
    updateSequence(input: UpdateSequenceInput!): Sequence!
    cancelSequence(id: String!): Sequence
    completeSequence(id: String!): Sequence
  }


`;
