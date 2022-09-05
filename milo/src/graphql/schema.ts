import { gql } from 'apollo-server-express';

const schema = gql`
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type AuthPayload {
    user: User
  }

  type Query {
    currentUser: User
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
    signup(name: String!, email: String!, password: String!): AuthPayload
  }
`;

export default schema;