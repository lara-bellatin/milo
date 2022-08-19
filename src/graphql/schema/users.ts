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

  input LoginUserInput {
    email: String!
    password: String!
  }

  input UpdateUserInput {
    email: String
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
    me(id: String!): User
    loginUser: User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
  }


`