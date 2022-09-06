import { gql } from "apollo-server-express";

export default gql`
  ## ENUMS
  
  enum UserStatus {
    ACTIVE
    DELETED
  }

  ## INPUTS

  input CreateUserInput {
    displayName: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    id: String!
    displayName: String
    username: String
    birthday: String
  }

  ## TYPES

  type User {
    id: String!
    displayName: String!
    username: String
    email: String!
    password: String!
    status: UserStatus!
    birthday: String
    createdAt: String
    updatedAt: String
    buckets: [Bucket]
    sequences: [Sequence]
    logs: [Log]
  }

  type AuthPayload {
    user: User
  }

  ## ENDPOINTS

  type Query {
    currentUser: User
  }

  type Mutation {
    createUser(input: CreateUserInput!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: String!): User!
  }


`