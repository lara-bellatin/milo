import { gql } from "apollo-server-express";

export default gql`
  ## ENUMS

  enum LogType {
    PLAN
    DECISION
    TASK
    WAIT
    EVENT
    PIN
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
    userId: String!
    sequenceId: String
    sequenceOrder: String
    bucketId: String
    sequence: Sequence
    bucket: Bucket
    owner: User
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
    addLogToBucket(id: String!, bucketId: String!): Log
    addLogToSequence(id: String!, sequenceId: String!, sequenceOrder: String): Log
  }


`