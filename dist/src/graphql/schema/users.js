"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
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
    me(id: String!): User
    loginUser: User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }


`;
//# sourceMappingURL=users.js.map