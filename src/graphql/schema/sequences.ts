import { gql } from "apollo-server-express";

export default gql`
  ## ENUMS
  enum SequenceStatus {
    ACTIVE
    COMPLETED
    CANCELED
  }

  ## INPUTS

  input CreateSequenceInput {
    title: String!
    ordered: Boolean!
    bucketId: String
    logInput: [CreateLogInput]
  }

  input UpdateSequenceInput {
    sequenceId: String!
    title: String
    ordered: Boolean!
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
    userId: String!
    buckets: [Bucket]
    logs: [Log]
    owner: User
  }


  ## ENDPOINTS

  type Query {
    sequence(sequenceId: String!): Sequence
    sequences: [Sequence!]!
  }

  type Mutation {
    createSequence(input: CreateSequenceInput!): Sequence!
    updateSequence(input: UpdateSequenceInput!): Sequence!
    cancelSequence(sequenceId: String!): Sequence
    completeSequence(sequenceId: String!): Sequence
  }


`