import { gql } from "apollo-server-express";

export default gql`
  ## ENUMS

  enum LogType {
    PLAN
    DECISION
    TASK
    WAIT
    EVENT
  }
  
  enum LogStatus {
    UNRESOLVED
    RESOLVED
    DELETED
  }

  ## INPUTS

  input CreateLogInput {
    title: String!
    description: String
    preNotes: String
    type: String!
    dueDate: String
    sequenceId: String
    bucketId: String
  }

  input UpdateLogInput {
    id: String!
    title: String
    description: String
    preNotes: String
    postNotes: String
    type: LogType
    dueDate: String
    sequenceId: String
    sequenceOrder: String
    bucketId: String
  }

  ## TYPES

  type Log {
    id: String!
    title: String!
    description: String
    preNotes: String
    postNotes: String
    type: LogType!
    status: LogStatus!
    dueDate: String
    createdAt: String
    updatedAt: String
    resolvedAt: String
    deletedAt: String
    sequenceId: String
    sequenceOrder: String
    bucketId: String
    sequence: Sequence
    bucket: Bucket
  }


  ## ENDPOINTS

  type Query {
    log(id: String!): Log
    logs: [Log!]!
  }

  type Mutation {
    createLog(input: CreateLogInput!): Log!
    updateLog(input: UpdateLogInput!): Log!
    deleteLog(id: String!): Log
    resolveLog(id: String!): Log
    unresolveLog(id: String!): Log
  }


`