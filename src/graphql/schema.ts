import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from "apollo-server-express";

import logs from "./schema/logs";
import sequences from "./schema/sequences";
import buckets from "./schema/buckets";
import users from "./schema/users";

const schema = gql`
  ## SCALARS
  scalar JSON

  ## PASSPORT MUTATION
  type Mutation {
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
  }

`


export default mergeTypeDefs([schema, logs, sequences, buckets, users])